import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Modal, Tooltip } from 'antd';
import { RiBtcFill } from "react-icons/ri";
import "./style.css";

const CloudGpu = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const translations = {
        "Рассчитайте стоимость": currentLanguage === "ru" ? "Рассчитайте стоимость" : "Calculate the cost",
        "Модель GPU": currentLanguage === "ru" ? "Модель GPU" : "GPU model",
        "Количество карт": currentLanguage === "ru" ? "Количество карт" : "Number of GPUs",
        "CPU, шт": currentLanguage === "ru" ? "CPU, шт" : "CPU, pcs",
        "RAM, ГБ": currentLanguage === "ru" ? "RAM, ГБ" : "RAM, GB",
        "Операционная система": currentLanguage === "ru" ? "Операционная система" : "Operating system",
        "Тарифный план": currentLanguage === "ru" ? "Тарифный план" : "Tariff plan",
        "Добавить еще один диск": currentLanguage === "ru" ? "Добавить еще один диск" : "Add another disk",
        "Жесткий диск, ГБ": currentLanguage === "ru" ? "Жесткий диск, ГБ" : "Hard disk, GB",
        "Тип диска": currentLanguage === "ru" ? "Тип диска" : "Disk type",
        "Цена за месяц": currentLanguage === "ru" ? "Цена за месяц" : "Price per month",
        "Итоговый расчет": currentLanguage === "ru" ? "Итоговый расчет" : "Final calculation",
        "Параметр": currentLanguage === "ru" ? "Параметр" : "Parameter",
        "Количество карт": currentLanguage === "ru" ? "Количество карт" : "Number of cards",
        "Максимальное количество GPU в одной виртуальное машине — 4 шт.": currentLanguage === "ru"
            ? "Максимальное количество GPU в одной виртуальное машине — 4 шт."
            : "The maximum number of GPUs in one virtual machine is 4.",
        "Операционная система": currentLanguage === "ru" ? "Операционная система" : "Operating System",
        "Тарифный план": currentLanguage === "ru" ? "Тарифный план" : "Tariff Plan",
        "Годовой план": currentLanguage === "ru" ? "Годовой план" : "Annual Plan",
        "Часовой": currentLanguage === "ru" ? "Часовой" : "Hourly",
        "Месячный план": currentLanguage === "ru" ? "Месячный план" : "Monthly Plan",
        "Месячный": currentLanguage === "ru" ? "Месячный" : "Monthly",
        "Часовой план": currentLanguage === "ru" ? "Часовой план" : "Hourly Plan",
        "Годовой": currentLanguage === "ru" ? "Годовой" : "Annual",
        "период оплаты составляет 1 месяц, минимальное использование — 1 год": currentLanguage === "ru"
            ? "период оплаты составляет 1 месяц, минимальное использование — 1 год"
            : "The payment period is 1 month, with a minimum usage of 1 year.",
        "период оплаты и минимальное использование — 1 месяц": currentLanguage === "ru"
            ? "период оплаты и минимальное использование — 1 месяц"
            : "The payment period and minimum usage are 1 month.",
        "период оплаты и минимальное использование — 1 час": currentLanguage === "ru"
            ? "период оплаты и минимальное использование — 1 час"
            : "The payment period and minimum usage are 1 hour.",
        "Значение": currentLanguage === "ru" ? "Значение" : "Value",
        "Цена за день": currentLanguage === "ru" ? "Цена за день" : "Price per day",
        "Детализация расчета": currentLanguage === "ru" ? "Детализация расчета" : "Calculation Details",
        "Тестировать": currentLanguage === "ru" ? "Тестировать" : "Test",
        "Стоимость при непрерывном использовании в течение дня. Посекундная тарификация.": currentLanguage === "ru"
            ? "Стоимость при непрерывном использовании в течение дня. Посекундная тарификация."
            : "Cost for continuous use throughout the day. Billed per second.",
        "Стоимость при непрерывном использовании в течение 30 дней. Посекундная тарификация.": currentLanguage === "ru"
            ? "Стоимость при непрерывном использовании в течение 30 дней. Посекундная тарификация."
            : "Cost for continuous use over 30 days. Billed per second.",
        "Кол-во сервисов в данной конфигурации": currentLanguage === "ru"
            ? "Кол-во сервисов в данной конфигурации"
            : "Number of services in this configuration",
        "Intel® Xeon® Gold 6230 2.10 GHz, TurboBoost до 3.4 GHz и Intel® Xeon® Gold 6230R 2.20 GHz, TurboBoost до 3.7 GHz": currentLanguage === "ru" ? "Intel® Xeon® Gold 6230 2.10 GHz, TurboBoost до 3.4 GHz и Intel® Xeon® Gold 6230R 2.20 GHz, TurboBoost до 3.7 GHz" : "Intel® Xeon® Gold 6230 2.10 GHz, TurboBoost up to 3.4 GHz and Intel® Xeon® Gold 6230R 2.20 GHz, TurboBoost up to 3.7 GHz",
        "Итог за 1 сервис(ов)": currentLanguage === "ru" ? "Итог за 1 сервис(ов)" : "Total for 1"
    };


    const [gpuModel, setGpuModel] = useState("L4 24 GB");
    const [os, setOs] = useState("centOS");
    const [plan, setPlan] = useState(translations["Годовой"]);
    const [disks, setDisks] = useState([{ size: 10, type: "HDD" }]);
    const [servicesConfiguration, setServicesConfiguration] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const defaultResources = {
        cpu: 16,
        ram: 72
    };

    const [gpuCount, setGpuCount] = useState(1);

    // resources obyektini default qiymatlar bilan boshlash
    const [resources, setResources] = useState(defaultResources);


    const incrementGpu = () => {
        if (gpuCount < 4) {
            setGpuCount(prev => prev + 1); // GPU sonini oshirish
            setResources(prev => ({
                cpu: prev.cpu + defaultResources.cpu, // CPU qiymatini oshirish
                ram: prev.ram + defaultResources.ram  // RAM qiymatini oshirish
            }));
        }
    };

    const decrementGpu = () => {
        if (gpuCount > 1) { // GPU sonini 1 dan kamaytirmaslik
            setGpuCount(prev => prev - 1);
            setResources(prev => ({
                cpu: prev.cpu - defaultResources.cpu, // CPU qiymatini kamaytirish
                ram: prev.ram - defaultResources.ram  // RAM qiymatini kamaytirish
            }));
        }
    };
    const gpuPrices = {
        "L4 24 GB": 100,    // ₽
        "A30 24 GB": 120,   // ₽
        "L40S 48 GB": 200,  // ₽
        "V100 16 GB": 80,   // ₽
        "V100 32 GB": 150,  // ₽
        "A100 40 GB": 250,  // ₽
        "A100 80 GB": 400,  // ₽
    };

    const calculatePrice = () => {
        const pricePerUnit = {
            gpu: 10000,
            cpu: 500,
            ram: 200,
            disk: { HDD: 100, SSD: 200, "High-IOPS SSD": 300, "High-IOPS HA SSD": 400 },
        };

        const gpuPrice = gpuCount * pricePerUnit.gpu;
        const cpuPrice = resources.cpu * pricePerUnit.cpu;
        const ramPrice = resources.ram * pricePerUnit.ram;
        const diskPrice = disks.reduce(
            (sum, disk) => sum + disk.size * pricePerUnit.disk[disk.type],
            0
        );

        const basePrice = gpuPrice + cpuPrice + ramPrice + diskPrice + gpuModel[1];

        let totalPrice;
        if (plan === translations["Годовой"]) totalPrice = basePrice * 12;
        if (plan === translations["Месячный"]) totalPrice = basePrice;
        if (plan === translations["Часовой"]) totalPrice = basePrice / 720;

        return totalPrice * servicesConfiguration; // Konfiguratsiyaga ko'paytirildi
    };



    const addDisk = () => {
        setDisks([...disks, { size: 10, type: "HDD" }]);
    };

    const updateDiskSize = (index, increment) => {
        const updatedDisks = disks.map((disk, i) =>
            i === index ? { ...disk, size: Math.max(disk.size + increment, 1) } : disk
        );
        setDisks(updatedDisks);
    };

    const updateDiskType = (index, type) => {
        const updatedDisks = disks.map((disk, i) =>
            i === index ? { ...disk, type } : disk
        );
        setDisks(updatedDisks);
    };

    const removeDisk = (index) => {
        setDisks(disks.filter((_, i) => i !== index));
    };


    // Kriptovalyutaga o'tish kursi (misol uchun: 1 rubl = 0.00001 BTC)
    const cryptoRate = 0.00001; // 1 rubl = 0.00001 BTC (bu qiymatni haqiqiy kursga moslashtiring)

    // Narxni kriptovalyutada hisoblash funksiyasi
    const calculateCryptoPrice = (priceInRubles) => {
        return priceInRubles * cryptoRate;  // Kriptovalyutaga konvertatsiya qilish
    };


    // Kripto raqamlarni formatlash funksiyasi
    const formatCryptoNumber = (number) => {
        return number.toLocaleString('en-US', {
            style: 'decimal',
            minimumFractionDigits: 6,  // Kamida 6 xonali aniqlik
            maximumFractionDigits: 6   // Maksimal 6 xonali aniqlik
        });
    };



    const gatherData = () => {
        const data = {
            gpuModel,
            os,
            plan,
            disks,
            servicesConfiguration,
            gpuCount,
            resources,
            totalPrice: calculatePrice(),
        };
        return data;
    };
    const dataToSubmit = gatherData();


    // Ma'lumotlar (Masalan, narxlar va boshqalar)
    console.log(dataToSubmit.disks)
    const tableData = dataToSubmit.resources
        ? [
            { name: "CPU", quantity: dataToSubmit.resources.cpu || 0, price: 0.5 },
            {
                name: "Операционная система",
                quantity: dataToSubmit.os,
                price: "-", // OS bepul, narx "-" ko'rsatiladi
            },
            ...(dataToSubmit.disks?.map((disk, index) => ({
                name: `Жесткий диск ${index + 1}, ${disk.type}`,
                quantity: disk.size, // Miqdor (GB)
                price: disk.type === "SSD" ? 0.1 : 0.15, // Disk narxi
            })) || []),
        ]
        : [];

    // Kunlik umumiy narx
    const totalDaily = tableData.reduce((sum, item) => {
        const itemPrice = typeof item.price === "number" ? item.price * item.quantity : 0;
        return sum + itemPrice;
    }, 0);
    // Oylik umumiy narx
    const totalMonthly = totalDaily * 30;


    // Modalni ochish
    const showModal = () => {
        setIsModalVisible(true);
    };

    // Modalni yopish
    const handleCancel = () => {
        setIsModalVisible(false);
    };



    return (
        <>
            <h1 className="mainTitle">{translations["Рассчитайте стоимость"]}</h1>
            <div className="container-config">


                <div className="config-box">
                    <div className="config">

                        {/* GPU model va son */}
                        <div>
                            <label>{translations["Модель GPU"]}</label>
                            <div className="button-group">
                                {Object.entries(gpuPrices).map(([modelName]) => (
                                    <button
                                        key={modelName}
                                        className={gpuModel === modelName ? "active" : ""}
                                        onClick={() => setGpuModel(modelName)}
                                    >
                                        {modelName}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* CPU va RAM */}
                        <div className="CPU-va-RAM">
                            <span>
                                <label>{translations["Количество карт"]}:
                                    <Tooltip title={translations["Максимальное количество GPU в одной виртуальное машине — 4 шт."]}>
                                        <IoMdInformationCircleOutline style={{ marginLeft: 4, cursor: 'help' }} />
                                    </Tooltip>
                                </label>
                                <div className="counter-container">
                                    <button className="counter-btn" onClick={decrementGpu}>-</button>
                                    <span>{gpuCount}</span>
                                    <button className="counter-btn" onClick={incrementGpu}>+</button>
                                </div>
                            </span>

                            <span>

                                <label>{translations["CPU, шт"]}.
                                    <Tooltip title={translations["Intel® Xeon® Gold 6230 2.10 GHz, TurboBoost до 3.4 GHz и Intel® Xeon® Gold 6230R 2.20 GHz, TurboBoost до 3.7 GHz"]}>
                                        <IoMdInformationCircleOutline style={{ marginLeft: 4, cursor: 'help' }} />
                                    </Tooltip>
                                </label>
                                <button>{resources.cpu}</button>
                            </span>

                            <span>
                                <label>{translations["RAM, ГБ"]} </label>
                                <button>{resources.ram}</button>
                            </span>

                            <span>
                                <label>{translations["Операционная система"]}: </label>
                                <select value={os} onChange={(e) => setOs(e.target.value)}>
                                    <option value="centOS">CentOS</option>
                                    <option value="Ubuntu">Ubuntu</option>
                                    <option value="Debian">Debian</option>
                                </select>
                            </span>

                        </div>

                        {/* Tarif rejasi */}
                        <div className="CPU-Tarif">
                            <label>{translations["Тарифный план"]}: <br />
                                <div className="button-group">
                                    {[translations["Годовой"], translations["Месячный"], translations["Часовой"]].map((planOption) => (
                                        <button
                                            key={planOption}
                                            className={plan === planOption ? "active" : ""}
                                            onClick={() => setPlan(planOption)}
                                        >
                                            {planOption}
                                        </button>
                                    ))}
                                </div>
                            </label>
                        </div>

                        <br />
                        <p><strong>{translations["Годовой план"]}:</strong>  {translations["период оплаты составляет 1 месяц, минимальное использование — 1 год"]}</p>
                        <p><strong>{translations["Месячный план"]}:</strong> {translations["период оплаты и минимальное использование — 1 месяц"]}</p>
                        <p><strong>{translations["Часовой план"]}:</strong>  {translations["период оплаты и минимальное использование — 1 час"]}</p>
                        <br />

                        {/* Disklar */}
                        <div>
                            {disks.map((disk, index) => (
                                <div key={index} className="disk-row">
                                    <label>{translations["Жесткий диск, ГБ"]}:
                                        <div className="counter-container">
                                            <button className="counter-btn" onClick={() => updateDiskSize(index, -1)}>-</button>
                                            <span>{disk.size}</span>
                                            <button className="counter-btn" onClick={() => updateDiskSize(index, 1)}>+</button>
                                        </div>
                                    </label>
                                    <label style={{ width: "100%" }}>{translations["Тип диска"]}:
                                        <Tooltip title="IOPS HDD - read 300-2400, write 150-800

                                                    IOPS SSD - read 1000-16000, write 500-8000
                                                    
                                                    High-IOPS SSD - read 10000-45000, write 5000-35000
                                                    
                                                    High-IOPS HA SSD - read 7500-35000, write 2000-12000
                                    ">
                                            <IoMdInformationCircleOutline style={{ marginLeft: 4, cursor: 'help' }} />
                                        </Tooltip>
                                        <div className="button-group">
                                            {["HDD", "SSD", "High-IOPS SSD", "High-IOPS HA SSD"].map((type) => (
                                                <button
                                                    key={type}
                                                    className={disk.type === type ? "active" : ""}
                                                    onClick={() => updateDiskType(index, type)}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </label>
                                    {
                                        disks?.length > 1 &&
                                        <button className="removeDisk" onClick={() => removeDisk(index)}><IoCloseOutline /></button>
                                    }
                                </div>
                            ))}
                            <p className="Add_disk" onClick={addDisk}>+ {translations["Добавить еще один диск"]}</p>
                        </div>
                    </div>

                    {/* Narx hisoboti */}
                    <div className="hisoboti-box">
                        <div>
                            <h2>{translations["Итоговый расчет"]}
                                <Tooltip title={translations["Детализация расчета"]}>
                                    <IoMdInformationCircleOutline onClick={showModal} style={{ marginLeft: 4, cursor: 'pointer' }} />
                                </Tooltip>
                            </h2>

                            <label style={{ marginTop: "4px", color: '#555' }}>{translations["Кол-во сервисов в данной конфигурации"]}
                                <div style={{ marginTop: "7px" }} className="counter-container">
                                    <button
                                        className="counter-btn"
                                        onClick={() => setServicesConfiguration(Math.max(servicesConfiguration - 1, 0))}
                                    >
                                        -
                                    </button>
                                    <span>{servicesConfiguration}</span>
                                    <button
                                        className="counter-btn"
                                        onClick={() => setServicesConfiguration(servicesConfiguration + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </label>
                        </div>

                        <div className="cpu-result">
                            <span>
                                <p>{translations["Цена за месяц"]}:
                                    <Tooltip title={translations["Стоимость при непрерывном использовании в течение 30 дней. Посекундная тарификация."]}>
                                        <IoMdInformationCircleOutline style={{ marginLeft: 4, cursor: 'help' }} />
                                    </Tooltip>
                                </p>
                                <h2>{formatCryptoNumber(calculateCryptoPrice(calculatePrice()))}  <RiBtcFill /></h2>
                            </span>
                            <span>
                                <p>{translations["Цена за день"]}:
                                    <Tooltip title={translations["Стоимость при непрерывном использовании в течение дня. Посекундная тарификация."]}>
                                        <IoMdInformationCircleOutline style={{ marginLeft: 4, cursor: 'help' }} />
                                    </Tooltip>
                                </p>
                                <h2>{formatCryptoNumber(calculateCryptoPrice(calculatePrice() / 30))}  <RiBtcFill /></h2>
                            </span>
                            <button>{translations["Тестировать"]}</button>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                <Modal
                    title={translations["Детализация расчета"]}
                    open={isModalVisible}
                    onCancel={handleCancel}
                    footer={null}
                >
                    {/* Jadval */}
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #ddd' }}>
                                <th style={{ padding: '10px', textAlign: 'left', textWrap: "nowrap" }}>{translations["Параметр"]}</th>
                                <th style={{ padding: '10px', textAlign: 'left', textWrap: "nowrap" }}>{translations["Значение"]}</th>
                                <th style={{ padding: '10px', textAlign: 'left', textWrap: "nowrap" }}>{translations["Цена за день"]}</th>
                                <th style={{ padding: '10px', textAlign: 'left', textWrap: "nowrap" }}>{translations["Цена за месяц"]}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData?.map((item, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                                    <td style={{ padding: '10px', textWrap: "nowrap" }}>{item.name}</td>
                                    <td style={{ padding: '10px', textWrap: "nowrap" }}>{item.quantity}</td>
                                    <td style={{ padding: '10px', textWrap: "nowrap" }}>{item.price === "-" ? "-" : `${item.price.toFixed(2)} USDT`}</td>
                                    <td style={{ padding: '10px', textWrap: "nowrap" }}>{item.price === "-" ? "-" : `${(item.price * item.quantity * 30).toFixed(2)} USDT`} </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr style={{ borderTop: '1.5px solid #000', fontWeight: 'bold' }}>
                                <td colSpan="2" style={{ padding: '10px' }}>{translations["Итог за 1 сервис(ов)"]}</td>
                                <td style={{ padding: '10px' }}>{totalDaily.toFixed(2)} USDT</td>
                                <td style={{ padding: '10px' }}>{totalMonthly.toFixed(2)} USDT</td>
                            </tr>
                        </tfoot>
                    </table>
                </Modal>
            </div>
        </>
    );
};

export default CloudGpu;

