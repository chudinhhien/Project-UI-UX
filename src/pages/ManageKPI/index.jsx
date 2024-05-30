import {
    PlusCircleOutlined
} from '@ant-design/icons'
import React, { useState } from "react";
import {
    Breadcrumb,
    Button,
    Col,
    Form,
    Row,
    message,
    Flex,
    Progress,
} from "antd";
import ModalComponent from "../../components/ModalComponent";
import { DndContext, PointerSensor, useSensor } from "@dnd-kit/core";
import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
    useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Tabs } from "antd";
import TableCustom from "../../components/TableCustom";
import { Link } from "react-router-dom";

const DraggableTabNode = ({ className, ...props }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({
            id: props["data-node-key"],
        });
    const style = {
        ...props.style,
        transform: CSS.Translate.toString(transform),
        transition,
        cursor: "move",
    };
    return React.cloneElement(props.children, {
        ref: setNodeRef,
        style,
        ...attributes,
        ...listeners,
    });
};


const ManageKPI = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: "Giảng dạy",
            quantity: 5,
            percentage: 90,
            targets: [
            ]
        },
        {
            id: 2,
            name: "Sinh hoạt",
            percentage: 70,
            quantity: 6
        },
        {
            id: 3,
            name: "Nghiên cứu",
            percentage: 30,
            quantity: 10
        }
    ])
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const [targets, setTargets] = useState([]);

    const [items, setItems] = useState([
        {
            key: "1",
            label: "Tất cả",
            children: <TableCustom />,
        },
        {
            key: "2",
            label: "Hoàn thành",
            children: "Content of Tab Pane 2",
        },
        {
            key: "3",
            label: "Chưa hoàn thành",
            children: "Content of Tab Pane 3",
        },
    ]);
    const sensor = useSensor(PointerSensor, {
        activationConstraint: {
            distance: 10,
        },
    });
    const onDragEnd = ({ active, over }) => {
        if (active.id !== over?.id) {
            setItems((prev) => {
                const activeIndex = prev.findIndex((i) => i.key === active.id);
                const overIndex = prev.findIndex((i) => i.key === over?.id);
                return arrayMove(prev, activeIndex, overIndex);
            });
        }
    };

    const showMessage = (type, content) => {
        messageApi.open({
            type,
            content,
        });
    };

    const handleAddTarget = () => {
        const nameTarget = form.getFieldValue("nameTarget");
        const unit = form.getFieldValue("unit");
        const newTarget = { name: nameTarget, unit: unit };
        setTargets([...targets, newTarget]);
        form.setFieldsValue({ nameTarget: "", unit: "" });
    };

    const handleOk = async () => {
        try {
            const formData = form.getFieldsValue();
            const tableData = targets.map((target, index) => ({
                ...target,
                key: index,
            }));

            const newKpiTypeData = {
                name: formData.name,
                thumbnail: formData.thumbnail,
                description: formData.description,
                percentage: 0,
                target: tableData,
            };
            console.log(newKpiTypeData);
            if (formData.name === "" || !formData.name) {
                setIsOpenModal(false);
                showMessage("error", "Failed to add KPI. Please try again.");
            } else {
                setData([
                    {
                        id: data.length + 1,
                        ...newKpiTypeData
                    },
                    ...data
                ]);
                setIsOpenModal(false);
                showMessage("success", "KPI added successfully!");
            }
            form.resetFields();
            setTargets([]);
        } catch (error) {
            console.log(error.message);
            showMessage("error", "Failed to add KPI. Please try again.");
        }
    };

    const handleCancel = () => {
        setIsOpenModal(false);
        form.resetFields();
        setTargets([]);
    };

    console.log(data);
    return (
        <div className="manage-kpi">
            {contextHolder}
            <div
                className="custom-container"
                style={{ backgroundColor: "#F5F6FA" }}
            >
                <Row>
                    <h1>Manage KPI</h1>
                </Row>
                <Row
                    justify="space-between"
                    align="middle"
                    style={{ marginTop: "5px", marginBottom: "10px" }}
                >
                    <Col>
                        <Breadcrumb>
                            <Breadcrumb.Item>Manage KPI</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                    <Col>
                        <Button
                            type="primary"
                            onClick={() => setIsOpenModal(true)}
                        >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <PlusCircleOutlined style={{ marginRight: '5px' }} />
                                <div>Add KPI</div>
                            </div>
                        </Button>
                    </Col>
                </Row>
                <div className="kpi-list">
                    {data.map((item, index) => (
                        <div className="kpi-item" key={index}>
                            <div className="kpi-item-top">
                                <Link to={`/manage-kpi/${item.id}`}>
                                    <h2 className="kpi-item-title">{item.name}</h2>
                                </Link>
                                <p className="kpi-item-target">{item.quantity} mục tiêu</p>
                            </div>
                            <hr />
                            <div className="kpi-item-bottom">
                                <Flex
                                    vertical
                                    gap="small"
                                    style={{
                                        width: "100%",
                                    }}
                                >
                                    <Progress
                                        percent={item.percentage}
                                        size="small"
                                        status="active"
                                        strokeColor="#1814f3"
                                    />
                                </Flex>
                                <button className="kpi-item-edit">Chỉnh sửa</button>
                            </div>
                        </div>
                    ))}
                </div>
                <Tabs
                    items={items}
                    renderTabBar={(tabBarProps, DefaultTabBar) => (
                        <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
                            <SortableContext
                                items={items.map((i) => i.key)}
                                strategy={horizontalListSortingStrategy}
                            >
                                <DefaultTabBar {...tabBarProps}>
                                    {(node) => (
                                        <DraggableTabNode
                                            {...node.props}
                                            key={node.key}
                                        >
                                            {node}
                                        </DraggableTabNode>
                                    )}
                                </DefaultTabBar>
                            </SortableContext>
                        </DndContext>
                    )}
                />

                <ModalComponent
                    isOpenModal={isOpenModal}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                    form={form}
                    handleAddTarget={handleAddTarget}
                    targets={targets}
                />
            </div>
        </div>
    );
};

export default ManageKPI;
