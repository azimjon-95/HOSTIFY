import React from "react";
import logo from '../../../assets/navbar/logo.png';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";
import LanguageSwitcher from "../../../components/LanguageSwitcher";

const UserNavbar = () => {

    const currentLanguage = useSelector((state) => state.language.currentLanguage) || "en";

    // Matnlarni dinamik qilish
    const translations = {
        en: {
            logoText: "Server Management System",
        },
        ru: {
            logoText: "Система управления серверами",
        },
    };

    const t = translations[currentLanguage]; // Oson ishlatish uchun shartli tarjima.



    return (
        <div className="user-navbar">
            <Link to="/">
                <div className="user-nav-main">
                    <img src={logo} alt="" className="logoImage" />
                    <span className="logoText">HOSTIFY</span>
                </div>
            </Link>
            <h3>{t.logoText}</h3>
            <LanguageSwitcher />
        </div>
    );
};

export default UserNavbar;
