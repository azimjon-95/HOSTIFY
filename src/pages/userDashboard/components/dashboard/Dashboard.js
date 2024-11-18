import React, { useEffect, useState } from "react";
import Layout from '../Layout/Layout';
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import parij from "../../../../assets/navbar/image.png";
import { MdAccountBalanceWallet } from "react-icons/md";
import { useSelector } from "react-redux";
import "./style.css";

const servers = [
    {
        name: { ru: "Париж", en: "Paris" },
        country: { ru: "Франция", en: "France" },
        flag: "🇫🇷",
    },
];

function Dashboard() {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);

    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        {
            id: 1,
            content: {
                ru: "💸 Запускаем бонус на пополнение баланса от $50 для всех клиентов. Бонусы начисляются автоматически",
                en: "💸 Launching a bonus for topping up balances over $50 for all customers. Bonuses are credited automatically",
            },
            link: "/page1",
            icon: <MdAccountBalanceWallet style={{ fontSize: "20px" }} />,
        },
        {
            id: 2,
            content: {
                ru: "😎 Скидка в честь долгожданного лета уже активна! - 20 % для всех тарифов во всех локациях!",
                en: "😎 The long-awaited summer discount is here! 20% off for all plans in all locations!",
            },
            link: "/page2",
            icon: <BiChevronRight style={{ fontSize: "20px" }} />,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 5500); // Har 5 sekundda almashadi
        return () => clearInterval(interval);
    }, [cards.length]);

    return (
        <Layout>
            <div className="server-container">
                <div className="slider-container">
                    {cards.map((card, index) => (
                        <Link
                            to={card.link}
                            key={card.id}
                            className={`card ${activeIndex === index
                                ? "active"
                                : activeIndex - 1 === index || (activeIndex === 0 && index === cards.length - 1)
                                    ? "exit"
                                    : ""
                                }`}
                        >
                            {currentLanguage === "ru" ? card.content.ru : card.content.en}
                            <div className="icon">{card.icon}</div>
                        </Link>
                    ))}
                </div>
                <h2>{currentLanguage === "ru" ? "Мои серверы" : "My Servers"}</h2>

                <div className="my-servers-box">
                    {true ? (
                        <div className="No-data-myServer">
                            <h2>{currentLanguage === "ru" ? "Нет активных серверов" : "No active servers"}</h2>
                            <p>
                                {currentLanguage === "ru"
                                    ? "Запустите сервер в считанные секунды в любой из локаций"
                                    : "Launch a server in seconds in any location"}
                            </p>
                        </div>
                    ) : (
                        <>
                            {servers.map((server, index) => (
                                <div key={index} className="server-card">
                                    <div className="server-flag">{server.flag}</div>
                                    <div className="server-info">
                                        <h3>
                                            {currentLanguage === "ru"
                                                ? server.name.ru
                                                : server.name.en}
                                        </h3>
                                        <p>
                                            {currentLanguage === "ru"
                                                ? server.country.ru
                                                : server.country.en}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                    <Link to="/userAuth/new">
                        <button className="create-server-btn">
                            {currentLanguage === "ru"
                                ? "Создать сервер"
                                : "Create Server"}{" "}
                            <img width={25} src={parij} alt="" />
                        </button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;
