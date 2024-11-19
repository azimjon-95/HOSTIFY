import React from "react";
import { Popover } from "antd";
import { BiSolidDownArrow } from "react-icons/bi";
import { useSelector } from "react-redux";
import logo from "../../assets/navbar/logo.png";
import "./style.css";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher";

const translations = {
    ru: {
        locations: "Локации",
        france: "Франции",
        tariffs: "Тарифы",
        info: "Информация",
        standardVPS: "Стандартные VPS/VDS",
        windowsVPS: "Windows VPS/VDS",
        memoryVPS: "Memory VPS/VDS",
        hiCPUVPS: "Hi-CPU VPS/VDS",
        dataCenters: "Датацентры",
        contacts: "Контакты",
        legalInfo: "Юридическая информация",
        login: "Войти",
        register: "Регистрация",
    },
    en: {
        locations: "Locations",
        france: "France",
        tariffs: "Tariffs",
        info: "Information",
        standardVPS: "Standard VPS/VDS",
        windowsVPS: "Windows VPS/VDS",
        memoryVPS: "Memory VPS/VDS",
        hiCPUVPS: "Hi-CPU VPS/VDS",
        dataCenters: "Data Centers",
        contacts: "Contacts",
        legalInfo: "Legal Information",
        login: "Login",
        register: "Register",
    },
};

const Navbar = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);

    const t = translations[currentLanguage] || translations.en;

    const tarif = (
        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            <Link to="/case/standard">{t.standardVPS}</Link>
            <Link to="/case/memory">{t.windowsVPS}</Link>
            <Link to="/case/hi-cpu">{t.memoryVPS}</Link>
            <Link to="/case/windows">{t.hiCPUVPS}</Link>
        </div>
    );

    const info = (
        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            <Link to="#">{t.dataCenters}</Link>
            <Link to="#">{t.contacts}</Link>
            <Link to="#">{t.legalInfo}</Link>
        </div>
    );



    const handleRegisterClick = () => {
        if (window.location.pathname !== "/") {
            // Sahifani qayta yuklash orqali '/' ga o'tadi
            window.location.assign("/");
        } else {
            // Sahifa hozirda '/' bo'lsa, silliq scroll qiladi
            window.scrollTo({
                top: window.pageYOffset + 2380,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="HIP-HOSTING" className="logo-image" />
                <span>HOSTIFY</span>
            </div>
            <div className="navbar-links">
                <Popover content={tarif} trigger="hover">
                    <Link to="#tariffs" className="navbar-link">
                        {t.tariffs} <BiSolidDownArrow />
                    </Link>
                </Popover>
                <Popover content={info} trigger="hover">
                    <Link to="#information" className="navbar-link">
                        {t.info} <BiSolidDownArrow />
                    </Link>
                </Popover>
                <LanguageSwitcher />

                <Link to="/userAuth">
                    <button className="navbar-auth-btn">{t.login}</button>
                </Link>
                <button className="navbar-auth-btn" onClick={handleRegisterClick}>{t.register}</button>
            </div>
        </div>
    );
};

export default Navbar;



