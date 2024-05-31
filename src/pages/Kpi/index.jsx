import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb, Flex, Progress, Modal, Form, Input, Button, notification } from 'antd';

function Kpi() {
    const location = useLocation();
    const { state } = location;
    const { name, kpis } = state;

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentKpi, setCurrentKpi] = useState(null);
    const [form] = Form.useForm();

    const breadcrumbStyle = {
        marginBottom: "20px",
        marginTop: "25px",
        cursor: "pointer",
    };

    const showUpdateModal = (kpi) => {
        setCurrentKpi(kpi);
        form.setFieldsValue({ name: kpi.name, description: kpi.description });
        setIsModalVisible(true);
    };

    const handleUpdate = (values) => {
        // Update the KPI data (in a real application, you would also update it in the backend)
        const updatedKpis = kpis.map((kpi) => 
            kpi.id === currentKpi.id ? { ...kpi, ...values } : kpi
        );
        // Update the state with the new KPIs
        state.kpis = updatedKpis;

        // Hide the modal and show a success notification
        setIsModalVisible(false);
        notification.success({ message: 'KPI updated successfully!' });
    };

    return (
        <>
            <div className="custom-container">
                <h1 className="page-title">{name}</h1>
                <Breadcrumb separator=">" style={breadcrumbStyle}>
                    <Breadcrumb.Item>
                        <Link to="/manage-kpi">Manage KPI</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{name}</Breadcrumb.Item>
                </Breadcrumb>
                {kpis && kpis.map((item, index) => (
                    <div className="item-kpi" key={index}>
                        <div className="item-kpi-info">
                            <Link
                                to={`/manage-kpi/${state.id}/${item.id}`}
                                state={{ ...item, typeId: state.id }}
                            >
                                <h2 className="item-kpi-name">{item.name}</h2>
                            </Link>
                            <p className="item-kpi-desc">
                                {item.description}
                            </p>
                        </div>
                        <div className="item-kpi-act">
                            <Flex vertical gap="small" style={{ width: 180 }}>
                                <Progress
                                    percent={item.percentage}
                                    strokeWidth={8}
                                    strokeColor="#52c41a"
                                    status="active"
                                />
                            </Flex>
                            <div className="item-kpi-btn-act">
                                <button
                                    className="item-kpi-btn"
                                    onClick={() => showUpdateModal(item)}
                                >
                                    Cập nhật
                                </button>
                                <button className="item-kpi-btn btn-remove">
                                    Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Modal
                title="Update KPI"
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleUpdate}
                >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please enter the KPI name' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[{ required: true, message: 'Please enter the KPI description' }]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default Kpi;
