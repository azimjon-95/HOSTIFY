import React from "react";
import { MdAccountBalanceWallet } from "react-icons/md";
import { Popover } from "antd";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import logo from '../../../../assets/navbar/logo.png'
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import LanguageSwitcher from "../../../../components/LanguageSwitcher";

const UserNavbar = () => {
    const token = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate(); // For navigation after logout


    // Logout handler
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove the token from localStorage (or sessionStorage)
        navigate("/userAuth"); // Redirect to login page (you can change this to your preferred route)
    };
    // Content for the Popover (menu items)
    const popoverContent = (
        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            <Link to="/userAuth/dashboard">Overview</Link>
            <Link to="/userAuth/balance">Balance</Link>
            <Link to="/userAuth/payment">Payment Response</Link>
            <Link to="/userAuth/profile">My Data</Link>
            <Link to="/userAuth/profile">Security</Link>
            <Link onClick={handleLogout} style={{ color: 'red', cursor: 'pointer' }}>
                Logout
            </Link>
        </div>
    );

    return (
        <div className="user-navbar">
            <Link to="/">
                <div className="user-nav-main">
                    <img src={logo} alt="" className="logoImage" />
                    <span className="logoText">HOSTIFY</span>
                </div>
            </Link>
            <div className="my-balans">
                {token && (
                    <>
                        <Link to="/userAuth/payment">
                            <button className="AccountBalanceWallet">
                                <MdAccountBalanceWallet style={{ fontSize: "20px" }} />$0.50
                            </button>
                        </Link>
                        <Popover content={popoverContent} trigger="click">
                            <button className="AccountBalanceWallet">
                                <FaUser />HIP
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
