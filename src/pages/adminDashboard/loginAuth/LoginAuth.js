import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { useSelector } from "react-redux";
import "./style.css";
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";

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



const LoginAuth = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage || "en");
    const texts = languages[currentLanguage];
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("https://your-server-url.com/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();
            if (response.ok) {
                message.success("Login successful!");
                // Tokenni saqlash
                localStorage.setItem("1ut#ut5u9r6#", result.token);
                // Yo'naltirish
                window.location.href = "/dashboard";
            } else {
                message.error(result.message || "Login failed!");
            }
        } catch (error) {
            console.error("Login error:", error);
            message.error("Something went wrong, please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <LayoutAdmin>
            <div className="authContainer">
                <div className="authForm">
                    <h1>{texts.title}</h1>
                    <form onSubmit={handleSubmit}>
                        <Input
                            className="input"
                            placeholder={texts.emailPlaceholder}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Input.Password
                            className="input"
                            placeholder={texts.passwordPlaceholder}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className="actions">
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                                className="button-btn"
                            >
                                {texts.loginButton}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default LoginAuth;

