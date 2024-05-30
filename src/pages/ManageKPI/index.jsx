// ManageKPI.js
import React, { useState, useEffect } from "react";
import {
    Breadcrumb,
    Button,
    Col,
    Form,
    Row,
    message,
    Flex,
    Progress,
    Modal
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
import { getKpis } from "../../services/kpiService";

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
                target: tableData,
            };

            //await addKpiType(newKpiTypeData);
            setIsOpenModal(false);
            showMessage("success", "KPI added successfully!");
            //const updatedKpiTypes = await getKpiTypes();
            //setKpiTypes(updatedKpiTypes);
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

    const [kpis, setKpis] = useState([]);

    useEffect(() => {
        async function fetchKpis() {
            const data = await getKpis();
            setKpis(data);
        }
        fetchKpis();
    }, []);

    console.log(kpis);

    return (
        <div className="manage-kpi">
            {contextHolder}
            <div
                className="custom-container"
                style={{ backgroundColor: "#E6E5FE" }}
            >
                <Row
                    justify="space-between"
                    align="middle"
                    style={{ marginTop: "20px", marginBottom: "20px" }}
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
                            Add KPI
                        </Button>
                    </Col>
                </Row>
                <div className="kpi-list">
                    {kpis.map((kpi, index) => (
                        <Link className="kpi-item" 
                        to={`/manage-kpi/${kpi.link}`}
                            state={ {...kpi} } key={index}>
                            <div className="kpi-item-top">
                                <h2 className="kpi-item-title">{kpi.category}</h2>
                                <p className="kpi-item-target">10 mục tiêu</p>
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
                                        percent={30}
                                        size="small"
                                        status="active"
                                    />
                                    {/* <Progress
                                    percent={50}
                                    size="small"
                                    status="active"
                                /> */}
                                </Flex>
                                <button className="kpi-item-edit">Chỉnh sửa</button>
                            </div>
                        </Link>
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
