import React from "react";
import { Input, Button, Divider } from "antd";
import { Link } from "react-router-dom";
import { ImGithub } from "react-icons/im";
import { ImGoogle } from "react-icons/im"; // Google ikonkasi
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../../context/modalType"; // modalSlice import
import "./style.css";
import Layout from "../components/Layout/Layout";

// Til sozlamalari
const languages = {
    en: {
        githubButton: "Login with GitHub",
        title: "Authorization",
        emailPlaceholder: "Email or username",
        passwordPlaceholder: "Password",
        forgotPassword: "Forgot password?",
        loginButton: "Login",
        registerButton: "Register",
        or: "or",
        googleButton: "Login with Google",
        registrationTitle: "Registration",
        registrationButton: "Register",
        terms: "By registering, you accept the Terms of Service and Privacy Policy",
        existingAccount: "I already have an account",
    },
    ru: {
        githubButton: "Войти через GitHub",
        title: "Авторизация",
        emailPlaceholder: "Email или логин",
        passwordPlaceholder: "Пароль",
        forgotPassword: "Забыли пароль?",
        loginButton: "Войти",
        registerButton: "Регистрация",
        or: "или",
        googleButton: "Войти с помощью Google",
        registrationTitle: "Регистрация",
        registrationButton: "Регистрация",
        terms: "Регистрируясь вы принимаете условия Пользовательского соглашения и Политики конфиденциальности",
        existingAccount: "У меня уже есть аккаунт",
    },
};

const Register = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.modal.isModalOpen);

    const handleOverlayClick = (e) => {
        if (e.target.className === "modal-overlay") {
            dispatch(closeModal());
        }
    };

    const handleSignInWithGoogle = () => {
        window.location.href = `https://hip-hosting-backend.vercel.app/auth/google`;
    };

    const texts = languages[currentLanguage];
    const handleSignUpWithGit = () => {
        console.log("OK");
        window.location.href = `https://hip-hosting-backend.vercel.app/auth/github`
    };

    return (
        <Layout>
            <div className="authContainer">
                <div className="authForm">
                    <h1>{texts.title}</h1>
                    <form>
                        <Input
                            className="input"
                            placeholder={texts.emailPlaceholder}
                            type="email"
                            required
                        />
                        <Input.Password
                            className="input"
                            placeholder={texts.passwordPlaceholder}
                            required
                        />
                        <div className="actions-Link">
                            <Link to="/forgot-password" className="forgotLink">
                                {texts.forgotPassword}
                            </Link>
                        </div>

                        <div className="actions">
                            <Button type="primary" className="button-btn">
                                {texts.loginButton}
                            </Button>
                            <Button onClick={() => dispatch(openModal())} type="default" className="button-btn">
                                {texts.registerButton}
                            </Button>
                        </div>
                        <Divider>{texts.or}</Divider>
                        <div className="socialButtons">
                            <button className="social-button google">
                                <ImGoogle /> {texts.googleButton}
                            </button>
                            <button className="social-button github">
                                <ImGithub />   {texts.githubButton}
                            </button>
                        </div>
                    </form>
                </div>

                {isModalOpen && (
                    <div className="modal-overlay" onClick={handleOverlayClick}>
                        <div className="modal">
                            <h2>{texts.registrationTitle}</h2>
                            <input
                                type="email"
                                placeholder={texts.emailPlaceholder}
                                className="input-field"
                            />
                            <button className="register-button">{texts.registrationButton}</button>
                            <Divider>{texts.or}</Divider>
                            <button onClick={handleSignInWithGoogle} className="social-button google">
                                <ImGoogle /> {texts.googleButton}
                            </button>
                            <button onClick={() => handleSignUpWithGit()} className="social-button github">
                                <ImGithub />   {texts.githubButton}
                            </button>
                            <p className="terms">{texts.terms}</p>
                            <button className="existing-account">{texts.existingAccount}</button>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Register;




