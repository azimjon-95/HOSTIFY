import React, { useState, useEffect, useRef } from "react";
import frs from '../../assets/frs.png'
import our_1 from '../../assets/banner/bullet-icon1.svg'
import our_2 from '../../assets/banner/bullet-icon2.svg'
import our_3 from '../../assets/banner/bullet-icon3.svg'
import our_4 from '../../assets/banner/bullet-icon4.svg'
import our_5 from '../../assets/banner/bullet-icon5.svg'
import our_6 from '../../assets/banner/bullet-icon6.svg'
import our_7 from '../../assets/banner/bullet-icon7.svg'
import our_8 from '../../assets/banner/bullet-icon8.svg'
import { Tooltip } from "antd";
import { useSelector } from "react-redux";

import img1 from '../../assets/banner/ubuntu.svg'
import img2 from '../../assets/banner/debian_.png'
import img3 from '../../assets/banner/centos.svg'
import bitcoin from '../../assets/banner/bitcoin.svg'
import hello_reg from '../../assets/banner/hello-man-en.svg'

import { MdNavigateNext } from "react-icons/md";
import { FaMicrochip, FaMemory, FaHdd, FaTachometerAlt, FaNetworkWired, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import "./style.css";


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
    },
};
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


export const PricingTable = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const texts = translations[currentLanguage];
    const plans = [
        { id: "s-1-fr", cpu: "1 vCPU", ram: "1 GB RAM", disk: "10 GB SSD", speed: "100 Mbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$3" },
        { id: "s-2-fr", cpu: "2 vCPU", ram: "2 GB RAM", disk: "20 GB SSD", speed: "100 Mbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$4" },
        { id: "s-3-fr", cpu: "2 vCPU", ram: "4 GB RAM", disk: "40 GB SSD", speed: "100 Mbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$6" },
        { id: "s-4-fr", cpu: "4 vCPU", ram: "8 GB RAM", disk: "80 GB SSD", speed: "100 Mbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$12" },
        { id: "s-5-fr", cpu: "4 vCPU", ram: "16 GB RAM", disk: "160 GB SSD", speed: "200 Mbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$20" },
        { id: "s-6-fr", cpu: "6 vCPU", ram: "24 GB RAM", disk: "240 GB SSD", speed: "200 Mbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$30" },
        { id: "s-7-fr", cpu: "8 vCPU", ram: "32 GB RAM", disk: "320 GB SSD", speed: "300 Mbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$40" },
        { id: "s-8-fr", cpu: "12 vCPU", ram: "48 GB RAM", disk: "480 GB SSD", speed: "400 Mbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$60" },
        { id: "s-9-fr", cpu: "16 vCPU", ram: "64 GB RAM", disk: "640 GB SSD", speed: "500 Mbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$80" },
        { id: "s-10-fr", cpu: "24 vCPU", ram: "96 GB RAM", disk: "960 GB SSD", speed: "1 Gbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$120" },
    ];
    const memory = [
        { id: "memory-1-fr", cpu: "1 vCPU", ram: "1 GB RAM", disk: "10 GB SSD", speed: "100 Mbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$10" },
        { id: "memory-2-fr", cpu: "2 vCPU", ram: "2 GB RAM", disk: "20 GB SSD", speed: "100 Mbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$14" },
        { id: "memory-3-fr", cpu: "2 vCPU", ram: "4 GB RAM", disk: "40 GB SSD", speed: "100 Mbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$26" },
        { id: "memory-4-fr", cpu: "4 vCPU", ram: "8 GB RAM", disk: "80 GB SSD", speed: "100 Mbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$72" },
        { id: "memory-5-fr", cpu: "4 vCPU", ram: "16 GB RAM", disk: "160 GB SSD", speed: "200 Mbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$120" },
        { id: "memory-6-fr", cpu: "6 vCPU", ram: "24 GB RAM", disk: "240 GB SSD", speed: "200 Mbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$130" },
        { id: "memory-7-fr", cpu: "8 vCPU", ram: "32 GB RAM", disk: "320 GB SSD", speed: "300 Mbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$240" },
        { id: "memory-8-fr", cpu: "12 vCPU", ram: "48 GB RAM", disk: "480 GB SSD", speed: "400 Mbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$260" },
        { id: "memory-9-fr", cpu: "16 vCPU", ram: "64 GB RAM", disk: "640 GB SSD", speed: "500 Mbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$380" },
        { id: "memory-10-fr", cpu: "24 vCPU", ram: "96 GB RAM", disk: "960 GB SSD", speed: "1 Gbps", location: `${!currentLanguage ? "Париж" : "Parij"}, DC2Scale`, price: "$420" },
    ];


    const [startIndex, setStartIndex] = useState(0);
    const [transition, setTransition] = useState(false);
    const sliderRef = useRef(null);
    const [dragStart, setDragStart] = useState(null); // Drag start position
    const [dragging, setDragging] = useState(false);
    const [data, setData] = useState(plans); // Default data
    const [activeButton, setActiveButton] = useState("Standard"); // Default active button


    const [email, setEmail] = useState("");
    const [confirmationCode, setConfirmationCode] = useState("");
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [message, setMessage] = useState("");
    const [countdown, setCountdown] = useState(30);
    const [canResend, setCanResend] = useState(false);


    const advantages = [
        {
            title: "99.8% Uptime",
            titleRu: "99.8% Время безотказной работы",
            description: "Your project is active all day long",
            descriptionRu: "Ваш проект активен круглосуточно",
            icon: our_1,
        },
        {
            title: "Unlimited bandwidth",
            titleRu: "Неограниченная пропускная способность",
            description: "Comfortable hosting for any needs",
            descriptionRu: "Комфортный хостинг для любых нужд",
            icon: our_2,
        },
        {
            title: "Fast NVMe drives",
            titleRu: "Быстрые NVMe-диски",
            description:
                "Our compute nodes built with Datacenter grade NVMe drives from leading vendors Intel and Samsung",
            descriptionRu:
                "Наши вычислительные узлы построены на базе NVMe-дисков уровня дата-центра от ведущих производителей Intel и Samsung",
            icon: our_3,
        },
        {
            title: "KVM technology",
            titleRu: "Технология KVM",
            description: "Is powerful and reliable",
            descriptionRu: "Мощная и надежная технология",
            icon: our_4,
        },
        {
            title: "Handy panel",
            titleRu: "Удобная панель управления",
            description: "We using self-developed control panel for a better experience",
            descriptionRu: "Мы используем собственную панель управления для улучшенного опыта",
            icon: our_5,
        },
        {
            title: "Profitable plans",
            titleRu: "Выгодные тарифы",
            description:
                "We appreciate your choose and offer a lot of plans for our clients!",
            descriptionRu:
                "Мы ценим ваш выбор и предлагаем множество тарифов для наших клиентов!",
            icon: our_6,
        },
        {
            title: "Easy to scale",
            titleRu: "Легкое масштабирование",
            description: "You can scale up your server just in few clicks",
            descriptionRu: "Вы можете масштабировать сервер всего за несколько кликов",
            icon: our_7,
        },
        {
            title: "Flexible plans",
            titleRu: "Гибкие тарифы",
            description:
                "We created a lot of many different plans ranges to solve your tasks",
            descriptionRu:
                "Мы создали множество различных тарифных планов для решения ваших задач",
            icon: our_8,
        },
    ];




    const handleNext = () => {
        if (startIndex + 4 < plans.length) {
            setTransition(true);
            setTimeout(() => {
                setStartIndex(startIndex + 1);
                setTransition(false);
            }, 500);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setTransition(true);
            setTimeout(() => {
                setStartIndex(startIndex - 1);
                setTransition(false);
            }, 500);
        }
    };

    // Mouse down (drag start)
    const handleMouseDown = (e) => {
        setDragStart(e.clientX); // Starting X position
        setDragging(true);
    };

    // Mouse move (dragging)
    const handleMouseMove = (e) => {
        if (!dragging || !dragStart) return;

        const diff = e.clientX - dragStart; // Difference in X position
        if (Math.abs(diff) > 50) {
            if (diff > 0 && startIndex > 0) {
                handlePrev();
            } else if (diff < 0 && startIndex + 4 < plans.length) {
                handleNext();
            }
            setDragging(false); // Stop dragging after moving
        }
    };

    // Mouse up (drag end)
    const handleMouseUp = () => {
        setDragging(false);
        setDragStart(null);
    };

    const handleButtonClick = (type) => {
        if (type === "Standard") {
            setData(plans);
        } else {
            setData(memory);
        }
        setActiveButton(type);
        setStartIndex(0); // Reset index
    };



    const t = register[currentLanguage]; // Tanlangan til matnini olish

    const handleSignUp = () => {
        if (email) {
            setIsCodeSent(true);
            setMessage(t.code_sent);
            setCountdown(30);
            setCanResend(false);
        } else {
            setMessage(t.enter_email);
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



    return (


        <div className="memory-continer">
            <h1>{texts.title}</h1>
            <div className="memory-btns">
                <button
                    className={activeButton === "Standard" ? "active" : ""}
                    onClick={() => handleButtonClick("Standard")}
                >
                    {texts.standard}
                </button>
                <button
                    className={activeButton === "Memory" ? "active" : ""}
                    onClick={() => handleButtonClick("Memory")}
                >
                    {texts.memory}
                </button>
            </div>
            <div className="slider-container">
                <div className="blue-box">
                    <ul>
                        <li>{texts.cpu} <FaMicrochip /></li>
                        <li>{texts.ram} <FaMemory /></li>
                        <li>{texts.disk}<FaHdd /></li>
                        <li>{texts.connection}<FaTachometerAlt /></li>
                        <li>{texts.location}<FaMapMarkerAlt /></li>
                        <li>{texts.price}<FaDollarSign /></li>
                        <li>{texts.order}<FaNetworkWired /></li>
                    </ul>
                </div>
                <div
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    className="cards-wrapper"
                >
                    <div className={`cards ${transition ? "sliding" : ""}`}>
                        {data.slice(startIndex, startIndex + 4).map((plan, index) => (
                            <div className="card" key={plan.id}>
                                <p><img width={23} style={{ marginRight: "5px" }} src={frs} alt="" /> <strong>{plan.id}</strong></p>
                                <div className="card-inner">
                                    <p>{plan.cpu}</p>
                                    <p>{plan.ram}</p>
                                    <p>{plan.disk}</p>
                                    <p>{plan.speed}</p>
                                    <p>{plan.location}</p>
                                    <p className="price">{plan.price}</p>
                                    <p>
                                        <button className="order-btn">{texts.order}</button>
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div className="next-prive-box">
                            <button
                                onClick={handlePrev}
                                disabled={startIndex === 0}
                                className={startIndex === 0 ? "disabled" : ""}
                            >
                                <GrFormPrevious />
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={startIndex + 4 >= plans.length}
                                className={startIndex + 4 >= plans.length ? "disabled" : ""}
                            >
                                <MdNavigateNext />
                            </button>
                        </div>
                    </div>
                </div>
            </div >

            <h1>{texts.popular_os}</h1>
            <div className="poplar_systems">
                <Tooltip title="Ubuntu">
                    <div className="poplar_systems_box">
                        <img src={img1} alt="System 1" />
                    </div>
                </Tooltip>
                <Tooltip title="Debian">
                    <div className="poplar_systems_box">
                        <img src={img2} alt="System 2" />
                    </div>
                </Tooltip>
                <Tooltip title="centOS">
                    <div className="poplar_systems_box">
                        <img src={img3} alt="System 3" />
                    </div>
                </Tooltip>
            </div>
            <h1>{texts.advantages}</h1>
            <div className="advantages-container">
                <div className="advantages-grid">
                    {advantages.map((advantage, index) => (
                        <div key={index} className="advantages-card">
                            <div className="advantages-icon">
                                <img src={advantage.icon} alt="" />
                            </div>
                            <h3 className="advantages-card-title">{currentLanguage ? advantage.title : advantage.titleRu}</h3>
                            <p className="advantages-description">{currentLanguage ? advantage.description : advantage.descriptionRu}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="payment-methods">
                <h1>{texts.payment_type}</h1>
                <div className="payment-methods-grid">
                    <img src={bitcoin} alt="" />
                </div>
            </div>
            <h1>{texts.quick_register}</h1>
            {/* <div className="signup-container">
                <div className="hello-text">
                    <img src={hello_reg} alt="" />
                </div>
                <div className="signup-form">
                    <h2>{texts.quick_register}</h2>
                    {!isCodeSent ? (
                        <>
                            <input
                                type="email"
                                placeholder={texts.email_placeholder}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button onClick={handleSignUp}>{texts.sign_up}</button>
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                placeholder={texts.confirmation_code_placeholder}
                                value={confirmationCode}
                                onChange={(e) => setConfirmationCode(e.target.value)}
                            />
                            <button onClick={handleVerifyCode}>{texts.verify}</button>
                        </>
                    )}
                    <p className="message">{message}</p>
                    <p>
                        {texts.user_agreement} <a href="#">{texts.privacy_policy}</a>
                    </p>
                </div>
            </div> */}

            <div className="signup-container">
                {/* <div className="language-switcher">
                    <button onClick={() => setLang("en")}>English</button>
                    <button onClick={() => setLang("ru")}>Русский</button>
                </div> */}
                <div className="hello-text">
                    <img src={hello_reg} alt="" />
                </div>
                <div className="signup-form">
                    <h2>{t.quick_register}</h2>
                    {!isCodeSent ? (
                        <>
                            <input
                                type="email"
                                placeholder={t.email_placeholder}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button onClick={handleSignUp}>{t.sign_up}</button>
                        </>
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
                    )}
                    <p className="message">{message}</p>
                    <p>
                        {t.user_agreement} <a href="#">{t.privacy_policy}</a>
                    </p>
                </div>
            </div>
        </div >

    );
};
