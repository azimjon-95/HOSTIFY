import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../../context/modalType";
import UserNavbar from "../UserNavbar/UserNavbar";
import "./style.css";


const languages = {
    en: {
        dashboard: "Dashboard",
        balance: "Balance & Payments",
        login: "Login",
        register: "Register",
    },
    ru: {
        dashboard: "Дашборд",
        balance: "Баланс и платежи",
        login: "Войти",
        register: "Регистрация",
    }
};

const Layout = ({ children }) => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const token = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    // Fetch the correct language strings based on currentLanguage
    const texts = languages[currentLanguage];

    // Tokenni tekshirish
    if (!children) {
        if (token) {
            return <Navigate to="/userAuth/dashboard" replace />;
        } else {
            return <Navigate to="/userAuth/login" replace />;
        }
    }

    return (
        <div className="layout-layout">
            <UserNavbar />
            <div className="layout-content">
                <div className="logoSection">
                    <div className="logomenus">
                        {token ? (
                            <>
                                <Link to="/userAuth/dashboard">{texts.dashboard}</Link>
                                <Link to="/userAuth/balance">{texts.balance}</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/userAuth/login">{texts.login}</Link>
                                <Link onClick={() => dispatch(openModal())}>{texts.register}</Link>
                            </>
                        )}
                    </div>
                </div>
                <div className="layout-authContainer">{children}</div>
            </div>
        </div>
    );
};

export default Layout;

