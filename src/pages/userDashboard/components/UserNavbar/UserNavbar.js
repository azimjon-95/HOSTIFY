import React, { useState, useEffect } from "react";
import { MdAccountBalanceWallet } from "react-icons/md";
import { Popover } from "antd";
import { RiBtcFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import logo from '../../../../assets/navbar/logo.png';
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import LanguageSwitcher from "../../../../components/LanguageSwitcher";

const UserNavbar = () => {
    const token = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate(); // For navigation after logout
    const currentLanguage = useSelector((state) => state.language.currentLanguage) || "en";

    const [btcRate, setBtcRate] = useState(0); // State to store the current BTC rate
    const [balanceInBTC, setBalanceInBTC] = useState(0); // State for balance in BTC

    // Fetch the current USD to BTC exchange rate
    useEffect(() => {
        const fetchBtcRate = async () => {
            try {
                const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
                const data = await response.json();
                const rate = data.bpi.USD.rate_float; // USD to BTC rate
                setBtcRate(rate);
            } catch (error) {
                console.error("Error fetching BTC rate:", error);
            }
        };

        fetchBtcRate();
    }, []);

    // Convert balance from USD to BTC
    useEffect(() => {
        if (btcRate > 0) {
            const balanceInUSD = 0.50; // Example balance in USD
            const balanceInBTC = balanceInUSD / btcRate;
            setBalanceInBTC(balanceInBTC);
        }
    }, [btcRate]);

    // Matnlarni dinamik qilish
    const translations = {
        en: {
            logoText: "HOSTIFY",
            overview: "Overview",
            balance: "Balance",
            paymentResponse: "Payment Response",
            myData: "My Data",
            security: "Security",
            logout: "Logout",
            balanceAmount: `${balanceInBTC.toFixed(6)}`, // Show the balance in BTC
        },
        ru: {
            logoText: "HOSTIFY",
            overview: "Обзор",
            balance: "Баланс",
            paymentResponse: "Ответ на оплату",
            myData: "Мои данные",
            security: "Безопасность",
            logout: "Выйти",
            balanceAmount: `${balanceInBTC.toFixed(6)}`, // Show the balance in BTC
        },
    };

    const t = translations[currentLanguage]; // Oson ishlatish uchun shartli tarjima.

    // Logout handler
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove the token from localStorage (or sessionStorage)
        navigate("/userAuth"); // Redirect to login page (you can change this to your preferred route)
    };

    // Content for the Popover (menu items)
    const popoverContent = (
        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            <Link to="/userAuth/dashboard">{t.overview}</Link>
            <Link to="/userAuth/balance">{t.balance}</Link>
            <Link to="/userAuth/payment">{t.paymentResponse}</Link>
            <Link to="/userAuth/profile">{t.myData}</Link>
            <Link to="/userAuth/profile">{t.security}</Link>
            <Link onClick={handleLogout} style={{ color: 'red', cursor: 'pointer' }}>
                {t.logout}
            </Link>
        </div>
    );

    return (
        <div className="user-navbar">
            <Link to="/">
                <div className="user-nav-main">
                    <img src={logo} alt="" className="logoImage" />
                    <span className="logoText">{t.logoText}</span>
                </div>
            </Link>
            <div className="my-balans">
                {token && (
                    <>
                        <Link className="AccountBalanceWallet_Link" to="/userAuth/payment">
                            <button className="AccountBalanceWallet">
                                <MdAccountBalanceWallet />
                                {t.balanceAmount}  <RiBtcFill className="RiBtcFill" />
                            </button>
                        </Link>
                        <Popover content={popoverContent} trigger="click">
                            <button className="AccountBalanceWallet">
                                <FaUser style={{ fontSize: "19px" }} />HIP
                            </button>
                        </Popover>
                    </>
                )}
                <LanguageSwitcher />
            </div>
        </div>
    );
};

export default UserNavbar;

