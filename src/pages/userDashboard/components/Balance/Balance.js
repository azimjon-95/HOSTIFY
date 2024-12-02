import React, { useState, useEffect } from 'react';
import './style.css';
import Layout from '../Layout/Layout';
import { useSelector } from "react-redux";

const Balance = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);

    // Tilga qarab tab nomlarini aniqlash
    const tabLabels = {
        ru: {
            topUp: 'Пополнить баланс',
            payments: 'Платежи',
        },
        en: {
            topUp: 'Top Up Balance',
            payments: 'Payments',
        },
    };

    // currentLanguagega mos activeTabni sozlash
    const [activeTab, setActiveTab] = useState(tabLabels[currentLanguage].topUp);

    // currentLanguage o'zgarganida activeTabni yangilash
    useEffect(() => {
        setActiveTab(tabLabels[currentLanguage].topUp);
    }, [currentLanguage]);

    // Matnlar
    const headerText = currentLanguage === 'ru' ? 'Баланс и платежи' : 'Balance and Payments';
    const balanceText = currentLanguage === 'ru' ? 'Баланс: 0.00 BTC' : 'Balance: 0.00 BTC';
    const walletText = currentLanguage === 'ru' ? '💳' : '💳';
    const bonusSectionTitle = currentLanguage === 'ru' ? 'Бонус за пополнение баланса' : 'Bonus for top-up balance';
    const levelsText = currentLanguage === 'ru' ? 'Уровни' : 'Levels';
    const bonusNote = currentLanguage === 'ru' ? 'Начисление производится автоматически сразу же после пополнения' : 'The bonus is credited automatically after top-up';
    const paymentHistoryText = currentLanguage === 'ru' ? 'История платежей' : 'Payment History';
    const dateText = currentLanguage === 'ru' ? 'Дата' : 'Date';
    const amountText = currentLanguage === 'ru' ? 'Сумма' : 'Amount';
    const descriptionText = currentLanguage === 'ru' ? 'Описание' : 'Description';

    // Define the USD to BTC conversion rate (example rate, this can be updated dynamically)
    const USD_TO_BTC = 0.000025; // Example conversion rate, 1 USD = 0.000025 BTC

    // Convert amounts to BTC
    const convertToBTC = (usdAmount) => (usdAmount * USD_TO_BTC).toFixed(6); // Converts to BTC and rounds to 6 decimal places

    const paymentRows = currentLanguage === 'ru'
        ? [
            { date: "2024-11-15", amount: convertToBTC(50), description: "Пополнение" },
            { date: "2024-11-10", amount: convertToBTC(20), description: "Оплата услуги" }
        ]
        : [
            { date: "2024-11-15", amount: convertToBTC(50), description: "Top-up" },
            { date: "2024-11-10", amount: convertToBTC(20), description: "Service payment" }
        ];

    return (
        <Layout>
            <div className="balance-container">
                <div className="balance-header">
                    <h1>{headerText}</h1>
                    <div className="tabs">
                        <button
                            className={`tab ${activeTab === tabLabels[currentLanguage].topUp ? 'active' : ''}`}
                            onClick={() => setActiveTab(tabLabels[currentLanguage].topUp)}
                        >
                            {tabLabels[currentLanguage].topUp}
                        </button>
                        <button
                            className={`tab ${activeTab === tabLabels[currentLanguage].payments ? 'active' : ''}`}
                            onClick={() => setActiveTab(tabLabels[currentLanguage].payments)}
                        >
                            {tabLabels[currentLanguage].payments}
                        </button>
                    </div>
                </div>

                {activeTab === tabLabels[currentLanguage].topUp && (
                    <>
                        <div className="balance-info">
                            <p className="current-balance">{balanceText}</p>
                            <button className="wallet-button">
                                <span className="wallet-icon">{walletText}</span>
                            </button>
                        </div>
                        <div className="bonus-section">
                            <h2>{bonusSectionTitle}</h2>
                            <p className="bonus-section-ur">{levelsText}</p>
                            <div className="cash-box">
                                <p className="current-cash">{convertToBTC(0)} – {convertToBTC(50)}</p>
                                <p className="current-cash percentage"> = </p>
                                <p className="current-cash highlight">+0%</p>
                            </div>
                            <div className="cash-box">
                                <p className="current-cash">{convertToBTC(50)} – {convertToBTC(100)}</p>
                                <p className="current-cash percentage"> = </p>
                                <p className="current-cash highlight">+5%</p>
                            </div>
                            <div className="cash-box">
                                <p className="current-cash">{convertToBTC(100)} – ∞</p>
                                <p className="current-cash percentage"> = </p>
                                <p className="current-cash highlight">+10%</p>
                            </div>
                            <p className="bonus-note">{bonusNote}</p>
                        </div>
                    </>
                )}

                {activeTab === tabLabels[currentLanguage].payments && (
                    <div className="payment-section">
                        <h2>{paymentHistoryText}</h2>
                        <table className="payments-table">
                            <thead>
                                <tr>
                                    <th>{dateText}</th>
                                    <th>{amountText}</th>
                                    <th>{descriptionText}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paymentRows.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.date}</td>
                                        <td>{row.amount} BTC</td>
                                        <td>{row.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Balance;
