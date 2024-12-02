import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserNavbar from "../UserNavbar/UserNavbar";
import "./style.css";


const languages = {
    en: {

        dashboard: "Dashboard",
        balance: "Available Servers",
        login: "Login",
        register: "Register",
        createServers: "Create Servers",
        logOut: "Log Out"
    },

    ru: {
        createServers: "Создать серверы",
        dashboard: "Дашборд",
        balance: "Доступные серверы",
        login: "Войти",
        register: "Регистрация",
        logOut: "Выйти"
    }
};

const LayoutAdmin = ({ children }) => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const token = localStorage.getItem('1ut#ut5u9r6#');
    const navigate = useNavigate(); // For navigation after logout
    // Fetch the correct language strings based on currentLanguage
    const texts = languages[currentLanguage];

    // Tokenni tekshirish
    if (!children) {
        if (token) {
            return <Navigate to="/auth/admin/servers" replace />;
        } else {
            return <Navigate to="/auth/admin/login" replace />;
        }
    }
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove the token from localStorage (or sessionStorage)
        navigate("/userAuth"); // Redirect to login page (you can change this to your preferred route)
    };


    return (
        <div className="layout-layout">
            <UserNavbar />
            <div className="layout-content">
                <div className="logoSection">
                    <div className="logomenus">
                        {token ? (
                            <>
                                <Link to="/auth/admin/servers">{texts.dashboard}</Link>
                                <Link to="/auth/admin/create">{texts.createServers}</Link>
                                <Link onClick={handleLogout} to="#logOut">{texts.logOut}</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/auth/admin/login">{texts.login}</Link>
                            </>
                        )}
                    </div>
                </div>
                <div className="layout-authContainer">{children}</div>
            </div>
        </div>
    );
};

export default LayoutAdmin;

