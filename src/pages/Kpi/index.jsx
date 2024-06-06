import {
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons'
import React, { lazy, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    PlusCircleOutlined,
} from '@ant-design/icons';
import {
    Breadcrumb,
    Flex,
    Progress,
    Modal,
    Form,
    Input,
    Button,
    notification,
    DatePicker,
    Col,
    Row,
    Select,
} from "antd";
import all_icons from '../../assets/icon/all_icon';
import TextArea from 'antd/es/input/TextArea';

function Kpi() {
    const location = useLocation();
    const { state } = location;
    const { name, kpis } = state;

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentKpi, setCurrentKpi] = useState(null);
    const [form] = Form.useForm();


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const breadcrumbStyle = {
        marginBottom: "5px",
        marginTop: "10px",
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
        notification.success({ message: "KPI updated successfully!" });
    };

   const options = [
    {
        label: "NaN",
        value: null
    },
    {
        label: <img src={all_icons.qldt} style={{height: '15px',width: '15px',objectFit: 'contain'}}/>,
        value: 'qldt'
    },
    {
        label: <img src={all_icons.quizlet} style={{height: '15px',width: '15px',objectFit: 'contain'}}/>,
        value: 'quizlet'
    },
    {
        label: <img src={all_icons.schooler} style={{height: '15px',width: '15px',objectFit: 'contain'}}/>,
        value: 'schooler'
    },
   ]

    return (
        <>
            <div className="custom-container">
                <h1 className="page-title">{name}</h1>
                <div className="row-duy">
                    <Breadcrumb separator=">" style={breadcrumbStyle}>
                        <Breadcrumb.Item>
                            <Link to="/manage-kpi">Manage KPI</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>{name}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Button
                        type="primary"
                    // onClick={() => updateSampleKpi(null)}
                    >
                        <div style={{ display: "flex", alignItems: "center" }} onClick={() => showModal()}>
                            <PlusCircleOutlined
                                style={{ marginRight: "5px" }}
                            />
                            <div>Add KPI</div>
                        </div>
                    </Button>
                </div>
                {kpis &&
                    kpis.map((item, index) => (
                        <div className="item-kpi" key={index}>
                            <div className="item-kpi-info">
                                <Link
                                    to={`/manage-kpi/${state.id}/${item.id}`}
                                    state={{ ...item, typeId: state.id }}
                                >
                                    <h2 className="item-kpi-name">
                                        {item.name}
                                    </h2>
                                </Link>
                                <p className="item-kpi-desc">
                                    {item.description}
                                </p>
                            </div>
                            <div className="item-kpi-act">
                                <Flex
                                    vertical
                                    gap="small"
                                    style={{ width: 180 }}
                                >
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
                                        <EditOutlined />
                                    </button>
                                    <button className="item-kpi-btn btn-remove">
                                        <DeleteOutlined />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <Modal title="ADD KPI" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form layout='vertical'>
                    <Row gutter={20}>
                        <Col sm={24}>
                            <Form.Item label="Name">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col sm={12}>
                            <Form.Item label="Start">
                                <DatePicker style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col sm={12}>
                            <Form.Item label="End">
                                <DatePicker style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col sm={24}>
                            <Form.Item label="Description">
                                <TextArea />
                            </Form.Item>
                        </Col>
                        <Col sm={24}>
                            <h1>Add target</h1>
                        </Col>

                        {state.target.map((item, index) => (
                            <Col key={index} sm={24}>
                                <Row gutter={20}>
                                    <Col sm={10}>
                                        <Form.Item label="Name">
                                            <Input value={item.name} disabled style={{color: 'black'}}/>
                                        </Form.Item>
                                    </Col>
                                    <Col sm={5}>
                                        <Form.Item label="Goal">
                                            <Input type='number' />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={5}>
                                        <Form.Item label="Weight">
                                            <Input type='number' />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={4}>
                                        <Form.Item label="Follow">
                                            <Select options = {options}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                        ))}

                    </Row>
                </Form>
            </Modal>
            <Modal
                title="Update KPI"
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
            >
                <Form form={form} layout="vertical" onFinish={handleUpdate}>
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the KPI name",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the KPI description",
                            },
                        ]}
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
