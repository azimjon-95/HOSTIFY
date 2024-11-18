import React, { useState, useEffect } from "react";
import { Button, Input, message } from "antd";
import { SiBitcoincash } from "react-icons/si";
import axios from "axios"; // Import axios for API calls
import { useSelector } from "react-redux";

import "./style.css"; // CSS faylni import qilyapmiz

const PaymentForm = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage) || "en"; // Current language from Redux store

    // Translations for both languages
    const translations = {
        en: {
            title: "Top Up",
            amountLabel: "Amount (USD)*",
            placeholder: "Enter amount",
            cryptoOption: "Crypto (BTC, USDT, ...more)",
            cancel: "Cancel",
            submit: "Top Up",
            note: "Payment is credited automatically",
            errorAmount: "Please enter an amount.",
            errorMinAmount: "The minimum amount is $10.",
            errorPayment: "An error occurred during payment.",
            errorPaymentFailed: "Payment failed. Please try again.",
        },
        ru: {
            title: "Пополнение",
            amountLabel: "Сумма (USD)*",
            placeholder: "Введите сумму",
            cryptoOption: "Крипто (BTC, USDT, ...и другие)",
            cancel: "Отмена",
            submit: "Пополнить",
            note: "Зачисление платежа происходит автоматически",
            errorAmount: "Пожалуйста, введите сумму.",
            errorMinAmount: "Минимальная сумма $10.",
            errorPayment: "Произошла ошибка при платеже.",
            errorPaymentFailed: "Платеж не удался. Попробуйте снова.",
        }
    };

    // Set the language-specific translations
    const t = translations[currentLanguage];

    const [userData, setUserData] = useState(null); // State to hold user data
    const [amount, setAmount] = useState(10); // State for payment amount
    const [loading, setLoading] = useState(false); // For loading state during API request

    const handleCancel = () => {
        window.history.back(); // Brauzer tarixida orqaga qaytadi
    };

    const handleSubmit = async () => {
        if (!amount) {
            message.error(t.errorAmount);
            return;
        }

        // Validate if amount is at least $10
        if (parseFloat(amount) < 10) {
            message.error(t.errorMinAmount);
            return;
        }

        try {
            setLoading(true);
            // Send data to Cryptomus API for payment processing
            const response = await axios.post("https://pay.cryptomus.com/pay", {
                amount, // Amount from the input field
                user_id: userData?.id, // User ID from fetched data
                user_name: userData?.name, // User name from fetched data
                currency: "USD", // You can change this as per your needs
                // Add other necessary data here based on Cryptomus API requirements
            });

            // Redirect to the payment page or show success message
            if (response.data.success) {
                window.location.href = response.data.payment_link; // Assuming Cryptomus returns a payment link
            } else {
                message.error(t.errorPaymentFailed);
            }
        } catch (error) {
            console.log(error);
            message.error(t.errorPayment);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="payment-overlay">
            <div className="payment-container">
                <h2 className="payment-title">{t.title}</h2>
                <div className="payment-input-group">
                    <label className="payment-label">{t.amountLabel}</label>
                    <Input
                        type="number"
                        prefix="$"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min={10} // Minimum value is 10
                        placeholder={t.placeholder}
                        className="payment-input"
                    />
                </div>
                <div className="payment-option">
                    <Button size="large">
                        {t.cryptoOption}
                        <SiBitcoincash style={{ color: '#f7931a', fontSize: "26px" }} />
                    </Button>
                </div>
                <div className="payment-actions">
                    <Button
                        type="default"
                        className="cancel-button"
                        onClick={handleCancel}
                    >
                        {t.cancel}
                    </Button>
                    <Button
                        type="primary"
                        className="submit-button"
                        onClick={handleSubmit}
                        loading={loading} // Show loading state
                    >
                        {t.submit}
                    </Button>
                </div>
                <p className="payment-note">
                    {t.note}
                </p>
            </div>
        </div>
    );
};

export default PaymentForm;
