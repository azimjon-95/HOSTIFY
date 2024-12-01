import React, { useState, useEffect, useRef } from "react";
import frs from '../../assets/frs.png'

import { useSelector } from "react-redux";
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
        </div >

    );
};
