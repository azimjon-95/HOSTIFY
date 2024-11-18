import React, { useState } from "react";
import { Input, Button, Divider } from "antd";
import { Link } from "react-router-dom";
import { ImVk } from "react-icons/im";
import { ImGithub } from "react-icons/im";

import "./style.css";

const Register = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleOverlayClick = (e) => {
        if (e.target.className === "modal-overlay") closeModal();
    };

    return (
        <div className="user-container">

            <div className="user-navbar">
                <img src="logo.png" alt="HIP-HOSTING" className="logoImage" />
                <span className="logoText">HIP-HOSTING</span>
            </div>

            <div className="authContainer">
                <div className="logoSection">
                    <div className="sidebarLinks">
                        <Link to="/login">Войти</Link>
                        <Link onClick={openModal}>Регистрация</Link>
                        <Link to="/vm">Виртуальная машина</Link>
                    </div>
                </div>

                <div className="authForm">
                    <h1>Авторизация</h1>
                    <form>
                        <Input
                            className="input"
                            placeholder="Email или логин"
                            type="email"
                            required
                        />
                        <Input.Password
                            className="input"
                            placeholder="Пароль"
                            required
                        />
                        <div className="actions">
                            <Button type="primary" className="button">
                                Войти
                            </Button>
                            <Link to="/forgot-password" className="forgotLink">
                                Забыли пароль?
                            </Link>
                        </div>
                        <Divider>или</Divider>
                        <div className="socialButtons">
                            <Button
                                className="socialButton"
                                icon={<ImVk />}
                                type="default"
                            >
                                Войти с помощью VK
                            </Button>
                            <Button
                                className="socialButton"
                                icon={<ImGithub />}
                                type="default"
                            >
                                Войти с помощью GitHub
                            </Button>
                        </div>
                    </form>
                </div>

                {isModalOpen && (
                    <div className="modal-overlay" onClick={handleOverlayClick}>
                        <div className="modal">
                            <h2>Регистрация</h2>
                            <input
                                type="email"
                                placeholder="Электронная почта"
                                className="input-field"
                            />
                            <button className="register-button">Регистрация</button>
                            <Divider>или</Divider>
                            <button className="social-button vk">Войти с помощью VK</button>
                            <button className="social-button github">Войти с помощью GitHub</button>
                            <p className="terms">
                                Регистрируясь вы принимаете условия Пользовательского соглашения и Политики конфиденциальности
                            </p>
                            <button className="existing-account">У меня уже есть аккаунт</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Register;
