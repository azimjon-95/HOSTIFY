import React from "react";
import { Form, Input, InputNumber, Button, Select, Card, Row, Col } from "antd";
import { useSelector } from "react-redux";
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";

const { Option } = Select;

const CreateServerForm = ({ onServerAdd }) => {
    const [form] = Form.useForm();
    const currentLanguage = useSelector((state) => state.language.currentLanguage) || "en";

    const translations = {
        en: {
            title: "Add New Server",
            serverId: "Server ID",
            cpu: "CPU",
            ram: "RAM",
            disk: "Disk",
            speed: "Speed",
            location: "Location",
            price: "Price (hourly)",
            addButton: "Add",
            placeholders: {
                serverId: "E.g., s-10-fr",
                cpu: "E.g., 24 vCPU",
                ram: "E.g., 96 GB RAM",
                disk: "E.g., 960 GB SSD",
                speed: "E.g., 1 Gbps",
                price: "E.g., 0.00240000",
            },
            locations: ["Paris, DC2Scale", "London, DC3Scale", "New York, DC4Scale"],
        },
        ru: {
            title: "Добавить новый сервер",
            serverId: "ID сервера",
            cpu: "Процессор (CPU)",
            ram: "ОЗУ (RAM)",
            disk: "Диск",
            speed: "Скорость",
            location: "Местоположение",
            price: "Цена (в час)",
            addButton: "Добавить",
            placeholders: {
                serverId: "Например, s-10-fr",
                cpu: "Например, 24 vCPU",
                ram: "Например, 96 ГБ ОЗУ",
                disk: "Например, 960 ГБ SSD",
                speed: "Например, 1 Гбит/с",
                price: "Например, 0.00240000",
            },
            locations: ["Париж, DC2Scale", "Лондон, DC3Scale", "Нью-Йорк, DC4Scale"],
        },
    };

    const t = translations[currentLanguage];

    const handleSubmit = (values) => {
        console.log("New server data:", values);
        if (onServerAdd) {
            onServerAdd(values);
        }
        form.resetFields();
    };

    return (
        <LayoutAdmin>
            <Card title={t.title}>
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Row gutter={[16, 16]}>
                        <Col span={8}>
                            <Form.Item
                                label={t.serverId}
                                name="id"
                                rules={[{ required: true, message: `${t.serverId} is required!` }]}
                            >
                                <Input placeholder={t.placeholders.serverId} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label={t.cpu}
                                name="cpu"
                                rules={[{ required: true, message: `${t.cpu} is required!` }]}
                            >
                                <Input placeholder={t.placeholders.cpu} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label={t.ram}
                                name="ram"
                                rules={[{ required: true, message: `${t.ram} is required!` }]}
                            >
                                <Input placeholder={t.placeholders.ram} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label={t.disk}
                                name="disk"
                                rules={[{ required: true, message: `${t.disk} is required!` }]}
                            >
                                <Input placeholder={t.placeholders.disk} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label={t.speed}
                                name="speed"
                                rules={[{ required: true, message: `${t.speed} is required!` }]}
                            >
                                <Input placeholder={t.placeholders.speed} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label={t.location}
                                name="location"
                                rules={[{ required: true, message: `${t.location} is required!` }]}
                            >
                                <Select placeholder={t.location}>
                                    {t.locations.map((loc, index) => (
                                        <Option key={index} value={loc}>
                                            {loc}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label={t.price}
                                name="price"
                                rules={[{ required: true, message: `${t.price} is required!` }]}
                            >
                                <InputNumber
                                    placeholder={t.placeholders.price}
                                    style={{ width: "100%" }}
                                    min={0}
                                    step={0.00000001}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            {t.addButton}
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </LayoutAdmin>
    );
};

export default CreateServerForm;
