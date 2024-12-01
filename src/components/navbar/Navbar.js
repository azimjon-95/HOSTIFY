import React from "react";
import { Popover } from "antd";
import { BiSolidDownArrow } from "react-icons/bi";
import { useSelector } from "react-redux";
import logo from "../../assets/navbar/logo.png";
import "./style.css";
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
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
            <NavLink to="/case/standard">{t.standardVPS}</NavLink>
            <NavLink to="/case/memory">{t.windowsVPS}</NavLink>
            <NavLink to="/case/hi-cpu">{t.memoryVPS}</NavLink>
            <NavLink to="/case/windows">{t.hiCPUVPS}</NavLink>
        </div>
    );

    const info = (
        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            <NavLink to="#">{t.dataCenters}</NavLink>
            <NavLink to="#">{t.contacts}</NavLink>
            <NavLink to="#">{t.legalInfo}</NavLink>
        </div>
    );

    return (
        <div className="navbar">
            <div className="navbar__logo_box">
                <div className="navbar-logo">
                    <img src={logo} alt="HIP-HOSTING" className="logo-image" />
                    <span>HOSTIFY</span>

                </div>
                <div className="lang_mobile">
                    <LanguageSwitcher />
                </div>
            </div>
            <div className="navbar-links">
                <Popover content={tarif} trigger="hover">
                    <NavLink to="#tariffs" className="navbar-link">
                        {t.tariffs} <BiSolidDownArrow />
                    </NavLink>
                </Popover>
                {/* <Popover content={info} trigger="hover">
                    <NavLink to="#information" className="navbar-link">
                        {t.info} <BiSolidDownArrow />
                    </NavLink>
                </Popover> */}
                <div className="lang_deck">
                    <LanguageSwitcher />
                </div>

                <NavLink to="/userAuth">
                    <button className="navbar-auth-btn">{t.login}</button>
                </NavLink>
                <Link to="sign-up" smooth={true} duration={500}>
                    <button className="navbar-auth-btn">{t.register}</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;



