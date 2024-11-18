import React from 'react';
import banner from '../../assets/banner/main-image.svg';
import secure from '../../assets/banner/secure.png';
import setting from '../../assets/banner/setting.png';
import startup from '../../assets/banner/startup.png';
import { useSelector } from "react-redux";

import './style.css';

const Banner = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);

    const translations = {
        ru: {
            title: "Надёжные серверы на базе KVM с мгновенной установкой",
            subtitle: "Высокая производительность по низкой цене!",
            button: "Смотреть тарифы",
            icons: [
                {
                    title: "Высокая надёжность",
                    description: "Используем надёжное оборудование всемирно известных брендов!"
                },
                {
                    title: "Полный контроль",
                    description: "Полный root доступ к серверу, никаких ограничений!"
                },
                {
                    title: "Быстрая установка",
                    description: "Сервер будет готов к работе менее чем за 1 минуту"
                }
            ]
        },
        en: {
            title: "Reliable KVM-based servers with instant setup",
            subtitle: "High performance at a low price!",
            button: "View Plans",
            icons: [
                {
                    title: "High reliability",
                    description: "We use reliable equipment from world-renowned brands!"
                },
                {
                    title: "Full control",
                    description: "Full root access to the server, no restrictions!"
                },
                {
                    title: "Quick setup",
                    description: "The server will be ready for operation in less than 1 minute"
                }
            ]
        }
    };

    const lang = translations[currentLanguage] || translations.ru;


    const handleRegisterClick = () => {
        window.scrollTo({
            top: window.pageYOffset + 810,  // Scroll down 600px from the current position
            behavior: "smooth", // Smooth scroll effect
        });
    };


    return (
        <div className="main-banner">
            <div className="continer-banner">
                <div className="banner-left">
                    <h1>{lang.title}</h1>
                    <h2>{lang.subtitle}</h2>

                    <button onClick={handleRegisterClick}>{lang.button}</button>
                </div>
                <div className="banner-right">
                    <img src={banner} alt="" />
                </div>
            </div>

            <div className="banner-icons">
                {lang.icons.map((icon, index) => (
                    <div className="icon_box" key={index}>
                        <div className="main-icon">
                            <img
                                width={index === 1 ? 65 : 50}
                                src={index === 0 ? secure : index === 1 ? setting : startup}
                                alt=""
                            />
                        </div>
                        <div className="main-text">
                            <h2>{icon.title}</h2>
                            <h3>{icon.description}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
