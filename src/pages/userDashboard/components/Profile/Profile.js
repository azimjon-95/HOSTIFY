import React, { useState } from "react";
import "./style.css";
import { Form, Button, Table, Switch } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Layout from "../Layout/Layout";
import { VscShare } from "react-icons/vsc";
import { useSelector } from "react-redux";

const translations = {
    en: {
        profile: "Profile",
        myData: "My data",
        security: "Security",
        fullName: "Full name *",
        enterFullName: "Enter your full name",
        email: "Email",
        enterEmail: "Enter your email address",
        receiveNews: "Receive news by Email?",
        update: "Update",
        changePassword: "Change password",
        currentPassword: "Current password",
        newPassword: "New password",
        repeatPassword: "Repeat password",
        changePasswordBtn: "Change password",
        activeSessions: "Active sessions",
        foundSessions: "Found {count} of 10 active sessions",
        dropSessions: "Drop all, except current",
        signInHistory: "Sign in history",
        date: "Date",
        ip: "IP address",
    },
    ru: {
        profile: "Профиль",
        myData: "Мои данные",
        security: "Безопасность",
        fullName: "Полное имя *",
        enterFullName: "Введите ваше полное имя",
        email: "Эл. адрес",
        enterEmail: "Введите ваш адрес электронной почты",
        receiveNews: "Получать новости по электронной почте?",
        update: "Обновить",
        changePassword: "Изменить пароль",
        currentPassword: "Текущий пароль",
        newPassword: "Новый пароль",
        repeatPassword: "Повторите пароль",
        changePasswordBtn: "Изменить пароль",
        activeSessions: "Активные сеансы",
        foundSessions: "Найдено {count} из 10 активных сеансов",
        dropSessions: "Завершить все, кроме текущего",
        signInHistory: "История входов",
        date: "Дата",
        ip: "IP адрес",
    },
};

const Profile = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage) || "en";
    const t = translations[currentLanguage]; // Matnlarni tanlang
    const [isChecked, setIsChecked] = useState(false);
    const [activeTab, setActiveTab] = useState("myData");
    const [sessions, setSessions] = useState([
        { date: "16.11.2024 19:17:15", ip: "87.249.132.136" },
        { date: "17.11.2024 17:20:28", ip: "87.249.132.136" },
    ]);


    const handleDropSessions = () => {
        console.log("Dropped all sessions except current");
    };

    const columns = [
        {
            title: t.date,
            dataIndex: "date",
            key: "date",
        },
        {
            title: t.ip,
            dataIndex: "ip",
            key: "ip",
        },
    ];

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    const toggleVisibility = (field) => {
        switch (field) {
            case "current":
                setShowCurrentPassword((prev) => !prev);
                break;
            case "new":
                setShowNewPassword((prev) => !prev);
                break;
            case "repeat":
                setShowRepeatPassword((prev) => !prev);
                break;
            default:
                break;
        }
    };


    const handleSwitchChange = (checked) => {
        setIsChecked(checked);
    };

    return (
        <Layout>
            <div className="profile-container">
                <h1 className="profile-title">{t.profile}</h1>
                <div className="profile-tabs">
                    <button
                        className={activeTab === "myData" ? "tab active" : "tab"}
                        onClick={() => setActiveTab("myData")}
                    >
                        {t.myData}
                    </button>
                    <button
                        className={activeTab === "security" ? "tab active" : "tab"}
                        onClick={() => setActiveTab("security")}
                    >
                        {t.security}
                    </button>
                </div>

                <div className="profile-content">
                    {activeTab === "myData" && (
                        <div className="form-container">
                            <label htmlFor="fullName">{t.fullName}</label>
                            <input type="text" id="fullName" placeholder={t.enterFullName} />

                            <label htmlFor="email">{t.email}</label>
                            <input type="email" id="email" placeholder={t.enterEmail} />

                            <div className="toggle-checkbox">
                                <Switch
                                    checked={isChecked}
                                    onChange={handleSwitchChange}
                                    className={isChecked ? "switch-checked" : "switch-unchecked"}
                                />
                                <label>{t.receiveNews}</label>
                            </div>
                            <div className="toggle-container">
                                <button className="update-btn">{t.update}</button>
                                <button
                                    onClick={() => setActiveTab("security")}
                                    className="change-password-btn"
                                >
                                    {t.changePassword} <VscShare />
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === "security" && (
                        <div className="form-container">
                            <span>{t.changePassword}</span>

                            <div style={{ position: "relative" }}>
                                <input
                                    type={showCurrentPassword ? "text" : "password"}
                                    placeholder={t.currentPassword}
                                    style={{ width: "100%", paddingRight: "40px" }}
                                />
                                <span
                                    onClick={() => toggleVisibility("current")}
                                    style={{
                                        position: "absolute",
                                        right: "10px",
                                        top: "38%",
                                        transform: "translateY(-50%)",
                                        cursor: "pointer",
                                    }}
                                >
                                    {showCurrentPassword ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                                </span>
                            </div>

                            <div style={{ position: "relative" }}>
                                <input
                                    type={showNewPassword ? "text" : "password"}
                                    placeholder={t.newPassword}
                                    style={{ width: "100%", paddingRight: "40px" }}
                                />
                                <span
                                    onClick={() => toggleVisibility("new")}
                                    style={{
                                        position: "absolute",
                                        right: "10px",
                                        top: "38%",
                                        transform: "translateY(-50%)",
                                        cursor: "pointer",
                                    }}
                                >
                                    {showNewPassword ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                                </span>
                            </div>

                            <div style={{ position: "relative" }}>
                                <input
                                    type={showRepeatPassword ? "text" : "password"}
                                    placeholder={t.repeatPassword}
                                    style={{ width: "100%", paddingRight: "40px" }}
                                />
                                <span
                                    onClick={() => toggleVisibility("repeat")}
                                    style={{
                                        position: "absolute",
                                        right: "10px",
                                        top: "38%",
                                        transform: "translateY(-50%)",
                                        cursor: "pointer",
                                    }}
                                >
                                    {showRepeatPassword ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                                </span>
                            </div>

                            <Form.Item>
                                <Button type="default" htmlType="submit" block>
                                    {t.changePasswordBtn}
                                </Button>
                            </Form.Item>

                            <div className="active_sessions">
                                <span>{t.activeSessions}</span>
                                <p>{t.foundSessions.replace("{count}", sessions.length)}</p>
                                <Button type="default" onClick={handleDropSessions}>
                                    {t.dropSessions}
                                </Button>
                            </div>

                            <span>{t.signInHistory}</span>
                            <Table
                                columns={columns}
                                dataSource={sessions.map((session, index) => ({ ...session, key: index }))}
                                pagination={false}
                                size="small"
                            />
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Profile;

