import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ret from "../../assets/footer/inf-1-full-dark.svg";
import { FaTelegram } from "react-icons/fa";
import "./style.css";

const Footer = () => {
  const currentLanguage = useSelector((state) => state.language.currentLanguage);

  const translations = {
    ru: {
      description: "Хостинг-провайдер с 2024 года",
      services: "Услуги",
      standardVPS: "Стандартные VPS/VDS",
      windowsVPS: "Windows VPS/VDS",
      memoryVPS: "Memory VPS/VDS",
      hiCPUVPS: "Hi-CPU VPS/VDS",
      profile: "Профиль",
      personalCabinet: "Личный кабинет",
      registration: "Регистрация",
      additional: "Дополнительно",
      userAgreement: "Пользовательское соглашение",
      privacyPolicy: "Политика конфиденциальности",
      contacts: "Контакты",
    },
    en: {
      description: "Hosting provider since 2024",
      services: "Services",
      standardVPS: "Standard VPS/VDS",
      windowsVPS: "Windows VPS/VDS",
      memoryVPS: "Memory VPS/VDS",
      hiCPUVPS: "Hi-CPU VPS/VDS",
      profile: "Profile",
      personalCabinet: "Personal Cabinet",
      registration: "Registration",
      additional: "Additional",
      userAgreement: "User Agreement",
      privacyPolicy: "Privacy Policy",
      contacts: "Contacts",
    },
  };

  const t = translations[currentLanguage] || translations.en;

  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="column">
          <img
            src="/path-to-your-logo.png"
            alt="HIP-HOSTING Logo"
            className="logo-img"
          />
          <p>{t.description}</p>
          <div className="footer-icons">
            <Link to="#" className="telegram-icon">
              <FaTelegram />
            </Link>
            <img width={130} src={ret} alt="" />
          </div>
        </div>
        <div className="column">
          <h4>{t.services}</h4>
          <ul>
            <li>
              <Link to="#standard-vps">{t.standardVPS}</Link>
            </li>
            <li>
              <Link to="#windows-vps">{t.windowsVPS}</Link>
            </li>
            <li>
              <Link to="#memory-vps">{t.memoryVPS}</Link>
            </li>
            <li>
              <Link to="#hi-cpu-vps">{t.hiCPUVPS}</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h4>{t.profile}</h4>
          <ul>
            <li>
              <Link to="#cabinet">{t.personalCabinet}</Link>
            </li>
            <li>
              <Link to="#registration">{t.registration}</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h4>{t.additional}</h4>
          <ul>
            <li>
              <Link to="#user-agreement">{t.userAgreement}</Link>
            </li>
            <li>
              <Link to="#privacy-policy">{t.privacyPolicy}</Link>
            </li>
            <li>
              <Link to="#contacts">{t.contacts}</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
