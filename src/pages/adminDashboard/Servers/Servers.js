import React, { useState } from "react";
import { useSelector } from "react-redux";
import { List, Card, Button, Modal, Form, Input, InputNumber } from "antd";
import {
    EditOutlined,
    DeleteOutlined,
    DesktopOutlined,
    DatabaseOutlined,
    HddOutlined,
    ThunderboltOutlined,
    EnvironmentOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import { FaBtc } from "react-icons/fa6";
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";
import './style.css'

const initialServers = [
    { id: "s-1", cpu: "4 vCPU", ram: "8 GB RAM", disk: "100 GB SSD", speed: "1 Gbps", location: "Parij, DC1", price: 0.001, quantity: 0 },
    { id: "s-2", cpu: "8 vCPU", ram: "16 GB RAM", disk: "200 GB SSD", speed: "2 Gbps", location: "London, DC2", price: 0.002, quantity: 5 },
    { id: "s-3", cpu: "16 vCPU", ram: "32 GB RAM", disk: "500 GB SSD", speed: "3 Gbps", location: "Berlin, DC3", price: 0.003, quantity: 3 },
    { id: "s-4", cpu: "2 vCPU", ram: "4 GB RAM", disk: "50 GB SSD", speed: "500 Mbps", location: "New York, DC4", price: 0.0008, quantity: 8 },
    { id: "s-5", cpu: "32 vCPU", ram: "128 GB RAM", disk: "1 TB SSD", speed: "4 Gbps", location: "Tokyo, DC5", price: 0.005, quantity: 2 },
    { id: "s-6", cpu: "1 vCPU", ram: "2 GB RAM", disk: "20 GB SSD", speed: "100 Mbps", location: "Seoul, DC6", price: 0.0004, quantity: 20 },
    { id: "s-7", cpu: "8 vCPU", ram: "32 GB RAM", disk: "250 GB SSD", speed: "2.5 Gbps", location: "Singapore, DC7", price: 0.0025, quantity: 7 },
    { id: "s-8", cpu: "12 vCPU", ram: "48 GB RAM", disk: "600 GB SSD", speed: "3.5 Gbps", location: "Dubai, DC8", price: 0.0035, quantity: 6 },
    { id: "s-9", cpu: "24 vCPU", ram: "96 GB RAM", disk: "960 GB SSD", speed: "5 Gbps", location: "Paris, DC9", price: 0.004, quantity: 4 },
    { id: "s-10", cpu: "2 vCPU", ram: "4 GB RAM", disk: "40 GB SSD", speed: "1 Gbps", location: "Moscow, DC10", price: 0.0012, quantity: 15 },
];

const translations = {
    en: {
        header: "Available Servers",
        edit: "Edit",
        delete: "Delete",
        editModalTitle: "Edit Server",
        cpu: "CPU",
        ram: "RAM",
        disk: "Disk",
        speed: "Speed",
        location: "Location",
        price: "Price",
        quantity: "Quantity",
        enterValue: "Please enter",
    },
    ru: {
        header: "Доступные серверы",
        edit: "Редактировать",
        delete: "Удалить",
        editModalTitle: "Редактировать сервер",
        cpu: "Процессор",
        ram: "ОЗУ",
        disk: "Диск",
        speed: "Скорость",
        location: "Расположение",
        price: "Цена",
        quantity: "Количество",
        enterValue: "Пожалуйста, введите",
    },

};

const Servers = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage) || "en";
    const t = translations[currentLanguage];
    const [servers, setServers] = useState(initialServers);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingServer, setEditingServer] = useState(null);
    const [form] = Form.useForm();

    const handleDelete = (id) => {
        setServers(servers.filter((server) => server.id !== id));
    };

    const handleEdit = (server) => {
        setEditingServer(server);
        form.setFieldsValue(server);
        setIsModalVisible(true);
    };

    const handleSave = () => {
        form.validateFields().then((values) => {
            setServers((prev) =>
                prev.map((server) => (server.id === editingServer.id ? { ...editingServer, ...values } : server))
            );
            setIsModalVisible(false);
            setEditingServer(null);
            form.resetFields();
        });
    };

    return (
        <LayoutAdmin>
            <div className="custom-scroll">
                <h2 className="servers-title">{t.header}</h2>
                <List
                    grid={{ gutter: 24, column: 3 }}
                    dataSource={servers}
                    renderItem={(server) => (
                        <List.Item>
                            <Card
                                className={`server-card ${server.quantity === 0 ? "disabled-card" : ""}`}

                                title={<span className="server-id">{server.id}</span>}
                                extra={
                                    <div className="card-buttons-hed">
                                        <Button
                                            type="primary"
                                            icon={<EditOutlined />}
                                            onClick={() => handleEdit(server)}
                                        >
                                            {t.edit}
                                        </Button>
                                        <Button
                                            type="primary"
                                            danger
                                            icon={<DeleteOutlined />}
                                            onClick={() => handleDelete(server.id)}
                                        >
                                            {t.delete}
                                        </Button>
                                    </div>
                                }
                            >
                                <div className="server_card_text">
                                    <DesktopOutlined className="server_icon desktop" />
                                    <b className="server_card_text-b ">{t.cpu}:</b> {server.cpu}
                                </div>
                                <div className="server_card_text">
                                    <DatabaseOutlined className="server_icon database" />
                                    <b className="server_card_text-b">{t.ram}:</b> {server.ram}
                                </div>
                                <div className="server_card_text">
                                    <HddOutlined className="server_icon hdd" />
                                    <b className="server_card_text-b">{t.disk}:</b> {server.disk}
                                </div>
                                <div className="server_card_text">
                                    <ThunderboltOutlined className="server_icon thunderbolt" />
                                    <b className="server_card_text-b">{t.speed}:</b> {server.speed}
                                </div>
                                <div className="server_card_text">
                                    <EnvironmentOutlined className="server_icon environment" />
                                    <b className="server_card_text-b">{t.location}:</b> {server.location}
                                </div>
                                <div className="server_card_text">
                                    <FaBtc className="server_icon bitcoin" />
                                    <b className="server_card_text-b">{t.price}:</b> {server.price.toFixed(6)}
                                </div>
                                <div className="server_card_text br">
                                    <ShoppingCartOutlined className="server_icon cart" />
                                    <b className="server_card_text-b">{t.quantity}:</b> {server.quantity}
                                </div>
                            </Card>
                        </List.Item>
                    )}
                />

                <Modal
                    title="Serverni tahrirlash"
                    open={isModalVisible}
                    onCancel={() => setIsModalVisible(false)}
                    onOk={handleSave}
                >
                    <Form form={form} layout="vertical">
                        <Form.Item
                            name="cpu"
                            label={t.cpu}
                            rules={[{ required: true, message: `${t.enterValue} ${t.cpu}!` }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="ram"
                            label={t.ram}
                            rules={[{ required: true, message: `${t.enterValue} ${t.ram}!` }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="disk"
                            label={t.disk}
                            rules={[{ required: true, message: `${t.enterValue} ${t.disk}!` }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="speed"
                            label={t.speed}
                            rules={[{ required: true, message: `${t.enterValue} ${t.speed}!` }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="location"
                            label={t.location}
                            rules={[{ required: true, message: `${t.enterValue} ${t.location}!` }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="price"
                            label={t.price}
                            rules={[{ required: true, message: `${t.enterValue} ${t.price}!` }]}
                        >
                            <InputNumber style={{ width: "100%" }} min={0} step={0.0001} />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </LayoutAdmin>
    );
};

export default Servers;
