import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ret from "../../assets/footer/inf-1-full-dark.svg";
import { FaTelegram } from "react-icons/fa";
import "./style.css";

const Footer = () => {
  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  const translations = {
    ru: {
      title: "Рассчитайте стоимость",
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
      title: "Calculate the cost",
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

  const location = useLocation();

  // Yo'nalishni tekshirish
  const isTrue =
    location.pathname === "/case/standard" ||
    location.pathname === "/case/memory" ||
    location.pathname === "/case/windows" ||
    location.pathname === "/case/hi-cpu";

  const handleRegisterClick = () => {
    window.scrollTo({
      top: window.scrollX + 0,
      behavior: "smooth",
    });
  };


  const handleRegister = () => {
    window.scrollTo({
      top: window.scrollX + 2850,
      behavior: "smooth",
    });
  };
  return (
    <footer style={{
      "--bg-color": isTrue ? "#0D1117" : "#F1F4FE",
    }}
      className="footer">
      <div className="footer-links">
        <div className="column">
          <img
            src="/path-to-your-logo.png"
            alt="HOSTIFY Logo"
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
            <li onClick={handleRegisterClick}>
              <Link to="/case/standard">{t.standardVPS}</Link>
            </li>
            <li onClick={handleRegisterClick}>
              <Link to="/case/memory">{t.windowsVPS}</Link>
            </li>
            <li onClick={handleRegisterClick}>
              <Link to="/case/hi-cpu">{t.memoryVPS}</Link>
            </li>
            <li onClick={handleRegisterClick}>
              <Link to="/case/windows">{t.hiCPUVPS}</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h4>{t.profile}</h4>
          <ul>
            <li>
              <Link onClick={handleRegisterClick} to="/userAuth">{t.personalCabinet}</Link>
            </li>
            <li>
              <Link onClick={handleRegister} to="#registration">{t.registration}</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h4>{t.additional}</h4>
          <ul>
            <li>
              <Link to="#user-agreement">{t.title}</Link>
            </li>
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
