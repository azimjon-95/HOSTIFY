import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/dashboard">Главная</Link>
            <Link to="/settings">Настройки</Link>
            <Link to="/profile">Профиль</Link>
        </div>
    );
};

export default Sidebar;
