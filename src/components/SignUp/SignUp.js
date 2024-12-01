import React, { useState, useEffect } from "react";
import axios from "../../api";
import { useSelector } from "react-redux";
import hello_reg from '../../assets/banner/hello-man-en.svg'
import './style.css';


const register = {
    en: {
        quick_register: "Quick Registration",
        email_placeholder: "Enter your email",
        confirmation_code_placeholder: "Enter confirmation code",
        sign_up: "Sign Up",
        verify: "Verify",
        user_agreement: "By signing up, you agree to the",
        privacy_policy: "Privacy Policy",
        code_sent: "Confirmation code sent! Check your email.",
        enter_email: "Please enter your email address.",
        code_verified: "Email successfully verified!",
        code_invalid: "Invalid confirmation code!",
        resend_available: "You can resend the code in",
        resend: "Resend Code",
    },
    ru: {
        quick_register: "Быстрая регистрация",
        email_placeholder: "Введите ваш email",
        confirmation_code_placeholder: "Введите код подтверждения",
        sign_up: "Зарегистрироваться",
        verify: "Подтвердить",
        user_agreement: "Регистрируясь, вы соглашаетесь с",
        privacy_policy: "Политикой конфиденциальности",
        code_sent: "Код подтверждения отправлен! Проверьте вашу почту.",
        enter_email: "Пожалуйста, введите ваш email.",
        code_verified: "Email успешно подтвержден!",
        code_invalid: "Неверный код подтверждения!",
        resend_available: "Вы можете отправить код повторно через",
        resend: "Отправить код повторно",
    },
};

const translations = {
    en: {
        title: "VPS/VDS Server Plans",
        standard: "Standard",
        memory: "Memory",
        cpu: "CPU",
        ram: "RAM",
        disk: "Disk",
        connection: "Connection",
        location: "Location",
        price: "Price",
        order: "Order",
        popular_os: "Popular Operating Systems",
        advantages: "Our Advantages",
        payment_type: "Payment type: only",
        quick_register: "Quick register",
        email_placeholder: "Your email",
        confirmation_code_placeholder: "Confirmation code",
        sign_up: "Sign Up",
        verify: "Verify",
        message_success: "Confirmation code sent! Check your email.",
        message_error_email: "Enter your email address.",
        message_error_code: "Confirmation code is incorrect!",
        user_agreement: "User  agreement",
        privacy_policy: "Privacy policy",
        hello: "Hello!"
    },
    ru: {
        title: "Тарифы VPS/VDS серверов",
        standard: "Стандартный",
        memory: "Память",
        cpu: "ЦП",
        ram: "ОЗУ",
        disk: "Диск",
        connection: "Соединение",
        location: "Локация",
        price: "Цена",
        order: "Заказать",
        popular_os: "Популярные ОС",
        advantages: "Наши преимущества",
        payment_type: "Тип оплаты: только",
        quick_register: "Быстрая регистрация",
        email_placeholder: "Ваш email",
        confirmation_code_placeholder: "Код подтверждения",
        sign_up: "Зарегистрироваться",
        verify: "Подтвердить",
        message_success: "Код подтверждения отправлен! Проверьте вашу почту.",
        message_error_email: "Введите адрес электронной почты.",
        message_error_code: "Код подтверждения неверный!",
        user_agreement: "Пользовательское соглашение",
        privacy_policy: "Политика конфиденциальности",
        hello: "Привет!"
    },
};

const SignUp = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const texts = translations[currentLanguage];

    const [email, setEmail] = useState("");
    const [confirmationCode, setConfirmationCode] = useState("");
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [message, setMessage] = useState("");
    const [countdown, setCountdown] = useState(30);
    const [canResend, setCanResend] = useState(false);


    const handleSignUp = async () => {
        if (email) {
            try {
                const res = await axios.post(`/register`, {
                    email,
                    fullname: "Azimjon Mamutaliyev",
                    balans: 1000,
                    avatar: "No image",
                    birthday: "1995-06-26",
                    country: "Uzbekistan",
                });
                console.log(res);

                setMessage("Ro'yxatdan muvaffaqiyatli o'tdingiz! Tasdiqlash kodi yuborildi.");
                setIsCodeSent(true);
                setCanResend(false);
                setTimeout(() => setCanResend(true), 30000); // Kodni qayta yuborish 30 soniyadan keyin ruxsat etiladi
            } catch (error) {
                setMessage("Ro‘yxatdan o‘tishda xatolik yuz berdi.");
            }
        } else {
            setMessage("Iltimos, emailni kiriting.");
        }
    };


    const handleResendCode = () => {
        if (!canResend) return;
        handleSignUp();
    };

    const handleVerifyCode = () => {
        if (confirmationCode === "123456") {
            setMessage(t.code_verified);
        } else {
            setMessage(t.code_invalid);
        }
    };
    useEffect(() => {
        if (isCodeSent && countdown > 0) {
            const timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (countdown === 0) {
            setCanResend(true);
        }
    }, [isCodeSent, countdown]);

    const t = register[currentLanguage]; // Tanlangan til matnini olish


    return (
        <div className="SignUp_cont">
            <h1 className="mainTitle">{texts.quick_register}</h1>
            <div className="signup-container">

                <div className="hello-text">
                    <img src={hello_reg} alt="" />
                    <div>{texts.hello || "Hello!"}</div>
                </div>

                <div className="signup-form">
                    <h2>{t.quick_register}</h2>
                    <>
                        <input
                            type="email"
                            placeholder={t.email_placeholder}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={handleSignUp}>{t.sign_up}</button>
                    </>
                    {/* {!isCodeSent ? (
    ) : (
        <>
            <input
                type="text"
                placeholder={t.confirmation_code_placeholder}
                value={confirmationCode}
                onChange={(e) => setConfirmationCode(e.target.value)}
            />
            <button onClick={handleVerifyCode}>{t.verify}</button>
            <div>
                {countdown > 0 ? (
                    <p>
                        {t.resend_available} {countdown} seconds.
                    </p>
                ) : (
                    <button style={{ marginTop: "10px" }} onClick={handleResendCode} disabled={!canResend}>
                        {t.resend}
                    </button>
                )}
            </div>
        </>
    )} */}
                    <p className="message">{message}</p>
                    <p>
                        {t.user_agreement} <a href="#">{t.privacy_policy}</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;