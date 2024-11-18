import React, { useState } from "react";
import "./style.css";
import Layout from "../Layout/Layout";
import { GoPlus } from "react-icons/go";
import img1 from "../../../../assets/memory/img1.png";
import img2 from "../../../../assets/memory/img2.png";
import img3 from "../../../../assets/memory/img3.png";
import mem1 from "../../../../assets/memory/mem1.png";
import mem2 from "../../../../assets/memory/mem2.png";
import { useSelector } from "react-redux";

import { FiMinus } from "react-icons/fi";
import { Select, Tooltip } from "antd";

const { Option } = Select;

const translations = {
    ru: {
        createServer: "Создать сервер",
        os: "Операционная система",
        tariffLine: "Линейка тарифов",
        standard: "Стандарт",
        memory: "Memory",
        standardDesc: "Стандартные облачные серверы для большинства повседневных задач",
        memoryDesc: "Облачные серверы с повышенным соотношением оперативной памяти для тяжелонагруженных задач",
        priceFrom: "От",
        perMonth: "/мес",
        serverCount: "Количество серверов:",
        tariff: "Тариф",
        cost: "Стоимость",
        createButton: "Создать сервер",
        serverTooltip: "Количество серверов, которые доступны к заказу прямо сейчас",
    },
    en: {
        createServer: "Create Server",
        os: "Operating System",
        tariffLine: "Tariff Line",
        standard: "Standard",
        memory: "Memory",
        standardDesc: "Standard cloud servers for most daily tasks",
        memoryDesc: "Cloud servers with increased RAM for heavy tasks",
        priceFrom: "From",
        perMonth: "/month",
        serverCount: "Server Count:",
        tariff: "Tariff",
        cost: "Cost",
        createButton: "Create Server",
        serverTooltip: "Number of servers available for order right now",
    },
};

const Tariff = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage) || "en";
    const t = translations[currentLanguage];

    const [selectedTariff, setSelectedTariff] = useState(3);
    const [serverCount, setServerCount] = useState(1);
    const [selectedTariffType, setSelectedTariffType] = useState("standard");

    const handleTariffSelect = (price) => {
        setSelectedTariff(price);
    };

    const tariffsData = [
        { id: 1, price: 3, cpu: 1, ram: "1 GB", ssd: "10 GB", calc: 234 },
        { id: 2, price: 4, cpu: 2, ram: "2 GB", ssd: "20 GB", calc: 89 },
        { id: 3, price: 6, cpu: 2, ram: "4 GB", ssd: "40 GB", calc: 34 },
        { id: 4, price: 12, cpu: 4, ram: "8 GB", ssd: "80 GB", calc: 234 },
        { id: 5, price: 18, cpu: 6, ram: "12 GB", ssd: "120 GB", calc: 134 },
        { id: 6, price: 24, cpu: 8, ram: "16 GB", ssd: "160 GB", calc: 38 },
        { id: 7, price: 32, cpu: 8, ram: "24 GB", ssd: "240 GB", calc: 54 },
        { id: 8, price: 48, cpu: 8, ram: "32 GB", ssd: "320 GB", calc: 204 },
        { id: 9, price: 64, cpu: 12, ram: "48 GB", ssd: "400 GB", calc: 234 },
        { id: 10, price: 96, cpu: 16, ram: "64 GB", ssd: "500 GB", calc: 194 },
    ];
    const memoryData = [
        { id: 1, price: 10, cpu: 1, ram: "1 GB", ssd: "10 GB", calc: 34 },
        { id: 2, price: 14, cpu: 2, ram: "2 GB", ssd: "20 GB", calc: 49 },
        { id: 3, price: 16, cpu: 2, ram: "4 GB", ssd: "40 GB", calc: 4 },
        { id: 4, price: 20, cpu: 4, ram: "8 GB", ssd: "80 GB", calc: 23 },
        { id: 5, price: 30, cpu: 6, ram: "12 GB", ssd: "120 GB", calc: 13 },
        { id: 6, price: 50, cpu: 8, ram: "16 GB", ssd: "160 GB", calc: 8 },
        { id: 7, price: 80, cpu: 8, ram: "24 GB", ssd: "240 GB", calc: 54 },
        { id: 8, price: 100, cpu: 8, ram: "32 GB", ssd: "320 GB", calc: 24 },
        { id: 9, price: 120, cpu: 12, ram: "48 GB", ssd: "400 GB", calc: 34 },
        { id: 10, price: 150, cpu: 16, ram: "64 GB", ssd: "500 GB", calc: 94 },
    ];
    const [tariffs, setTariffs] = useState(tariffsData);
    const handleSwitchTariff = (type) => {
        setSelectedTariffType(type);
        setTariffs(type === "standard" ? tariffsData : memoryData);
    };

    const totalPrice = selectedTariff * serverCount;
    const [activeOption, setActiveOption] = useState(null);

    const handleOptionClick = (optionName) => {
        setActiveOption(optionName);
    };

    return (
        <Layout>
            <div className="tariff-container">
                <h1 className="confirmation-text">{t.createServer}</h1>

                {/* Operating Systems Section */}
                <h2 className="systems-section-title">{t.os}</h2>
                <div className="systems-section">
                    <div className="systems-options">
                        <div
                            className={`systems-option ${activeOption === "Ubuntu" ? "active" : ""}`}
                            onClick={() => handleOptionClick("Ubuntu")}
                        >
                            <img width={80} src={img1} alt="Ubuntu Logo" />
                            <p>Ubuntu</p>
                            <Select className="systems-option-selsect" title="Версия" defaultValue="22.04 LTS">
                                <Option value="16.04 LTS">16.04 LTS</Option>
                                <Option value="18.04 LTS">18.04 LTS</Option>
                                <Option value="20.04 LTS">20.04 LTS</Option>
                                <Option value="22.04 LTS">22.04 LTS</Option>
                            </Select>
                        </div>
                        <div
                            className={`systems-option ${activeOption === "Debian" ? "active" : ""}`}
                            onClick={() => handleOptionClick("Debian")}
                        >
                            <img width={60} src={img2} alt="Debian Logo" />
                            <p>Debian</p>
                            <Select
                                className="systems-option-selsect"
                                title="Версия"
                                defaultValue="10 LTS"
                            >
                                <Option value="9">9</Option>
                                <Option value="10 LTS">10 LTS</Option>
                                <Option value="11">11</Option>
                            </Select>
                        </div>

                        <div
                            className={`systems-option ${activeOption === "CentOS" ? "active" : ""}`}
                            onClick={() => handleOptionClick("CentOS")}
                        >
                            <img width={77} src={img3} alt="CentOS Logo" />
                            <p>CentOS</p>
                            <Select
                                className="systems-option-selsect"
                                title="Версия"
                                defaultValue="9 Stream"
                            >
                                <Option value="8">8</Option>
                                <Option value="8 Stream">8 Stream</Option>
                                <Option value="9 Stream">9 Stream</Option>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Tariff Plans Section */}
                <h2 className="systems-section-title">{t.tariffLine}</h2>
                <div className="systems-section">
                    <div className="systems-tariffs">
                        <div
                            className={`systems-tariff ${selectedTariffType === "standard" ? "active" : ""}`}
                            onClick={() => handleSwitchTariff("standard")}
                        >
                            <div className="system-t-img">
                                <img width={70} src={mem1} alt="" />
                            </div>
                            <h3>{t.standard}</h3>
                            <p>{t.standardDesc}</p>
                            <div className="mem-box-price">
                                <p>{t.priceFrom}</p>
                                <p>$3.00{t.perMonth}</p>
                            </div>
                        </div>
                        <div
                            className={`systems-tariff ${selectedTariffType === "memory" ? "active" : ""}`}
                            onClick={() => handleSwitchTariff("memory")}
                        >
                            <div className="system-t-img">
                                <img width={70} src={mem2} alt="" />
                            </div>
                            <h3>{t.memory}</h3>
                            <p>{t.memoryDesc}</p>
                            <div className="mem-box-price">
                                <p>{t.priceFrom}</p>
                                <p>$10.00{t.perMonth}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="server-control-boc">
                    <p>{t.tariff}</p>
                    <div className="server-control">
                        <p>{t.serverCount}</p>
                        <button
                            style={{ cursor: serverCount === 1 ? "not-allowed" : "pointer" }}
                            onClick={() => setServerCount(serverCount - 1)}
                            disabled={serverCount === 1}
                        >
                            <FiMinus />
                        </button>
                        <span>{serverCount}</span>
                        <button onClick={() => setServerCount(serverCount + 1)}><GoPlus /></button>
                    </div>
                </div>
                <div className="tariff-grid">
                    {tariffs.map((tariff) => (
                        <div
                            key={tariff.id}
                            className={`tariff-card ${selectedTariff === tariff.price ? "selected" : ""}`}
                            onClick={() => handleTariffSelect(tariff.price)}
                        >
                            <Tooltip title={t.serverTooltip}>
                                <p className="calc-server">{tariff.calc}</p>
                            </Tooltip>
                            <h3>${tariff.price}</h3>
                            <p>{tariff.cpu} vCPU</p>
                            <p>{tariff.ram} RAM</p>
                            <p>{tariff.ssd} SSD</p>
                        </div>
                    ))}
                </div>

                <h2 className="systems-section-title">{t.cost}</h2>
                <div className="confirmation">
                    <p>{t.cost}</p>
                    <div>
                        <p>${totalPrice.toFixed(2)}{t.perMonth}</p>
                        <button className="create-button">{t.createButton}</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Tariff;
