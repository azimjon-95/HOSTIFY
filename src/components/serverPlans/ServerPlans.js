import React from "react";
import { Tooltip } from "antd";
import './style.css';
import our_1 from '../../assets/banner/bullet-icon1.svg'
import our_2 from '../../assets/banner/bullet-icon2.svg'
import our_3 from '../../assets/banner/bullet-icon3.svg'
import our_4 from '../../assets/banner/bullet-icon4.svg'
import our_5 from '../../assets/banner/bullet-icon5.svg'
import our_6 from '../../assets/banner/bullet-icon6.svg'
import our_7 from '../../assets/banner/bullet-icon7.svg'
import our_8 from '../../assets/banner/bullet-icon8.svg'
import img1 from '../../assets/banner/ubuntu.svg'
import img2 from '../../assets/banner/debian_.png'
import img3 from '../../assets/banner/centos.svg'
import bitcoin from '../../assets/banner/bitcoin.svg'
import { useSelector } from "react-redux";


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
const ServerPlans = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const texts = translations[currentLanguage];

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


    return (
        <>
            <h1 className="mainTitle">{texts.popular_os}</h1>
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
            <h1 className="mainTitle">{texts.advantages}</h1>
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
        </>
    )
}

export default ServerPlans