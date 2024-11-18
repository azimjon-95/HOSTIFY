import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../context/languageSlice";
import Translate from "../assets/navbar/translate.png";
import '../index.css'
import { Popover } from "antd";

const LanguageSwitcher = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const dispatch = useDispatch();

    const handleLanguageChange = (lang) => {
        dispatch(setLanguage(lang));
    };

    const languageOptions = (
        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            <button
                className={currentLanguage === "ru" ? "active-language" : "active-language-nan"}
                onClick={() => handleLanguageChange("ru")}
            >
                Русский
            </button>
            <button
                className={currentLanguage === "en" ? "active-language" : "active-language-nan"}
                onClick={() => handleLanguageChange("en")}
            >
                English
            </button>
        </div>
    );


    return (
        <Popover content={languageOptions} trigger="hover">
            <img
                style={{ margin: "0 10px", cursor: "pointer" }}
                width={28}
                src={Translate}
                alt="Translate"
            />
        </Popover>
    );
};

export default LanguageSwitcher;
