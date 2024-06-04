import {
    PlusCircleOutlined,
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons'
import React, { useEffect, useState } from "react";
import {
    Breadcrumb,
    Button,
    Col,
    Form,
    Row,
    message,
    Flex,
    Progress,
    Popconfirm,
} from "antd";
import ModalComponent from "../../components/ModalComponent";
import { DndContext, PointerSensor, useSensor } from "@dnd-kit/core";
import { useDispatch } from 'react-redux'
import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
    useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Tabs } from "antd";
import TableCustomOne from "../../components/TableCustomOne";
import TableCustomTwo from "../../components/TableCustomTwo";
import TableCustomThree from "../../components/TableCustomThree";
import TableCustomFour from "../../components/TableCustomFour";
import { Link } from "react-router-dom";
import { deleteKpiById, getKpi, getKpis, postKpis, updateKpi } from '../../services/kpiService';
import { closeModal, openModal } from '../../actions/Modal';

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
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const data1 = await getKpis();
            setData(data1);
        } catch (error) {
            console.error("Error fetching KPIs:", error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    const deleteKpi = async (id) => {
        await deleteKpiById(id);
        fetchData();
        showMessage("success","Delete Successful!")
    };
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const [targets, setTargets] = useState([]);

    const [items, setItems] = useState([
        {
            key: "1",
            label: "All",
            children: <TableCustomOne />,
        },
        {
            key: "2",
            label: "Upcoming",
            children: <TableCustomTwo />,
        },
        {
            key: "3",
            label: "Completed",
            children: <TableCustomThree />,
        },
        {
            key: "4",
            label: "No Completed",
            children: <TableCustomFour />,
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


    const handleOk = async () => {
        try {
            const formData = form.getFieldsValue();
            console.log(formData);

            const newKpiTypeData = {
                id: formData.id,
                name: formData.name,
                description: formData.description,
                percentage: 0,
                target: formData.target,
            };
            if (formData.name === "" || !formData.name) {
                setIsOpenModal(false);
                showMessage("error", "Failed to add KPI. Please try again.");
            } else {
                const addKpi = async () => {
                    try {
                        if (newKpiTypeData.id) {
                            await updateKpi(newKpiTypeData);
                        } else {
                            await postKpis(newKpiTypeData);
                        }
                        fetchData();
                    } catch (error) {
                        console.error("Error fetching KPIs:", error);
                    }
                }
                addKpi();
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
        form.resetFields();
        setIsOpenModal(false);
        dispatch(closeModal());
    };



    const updateSampleKpi = async (id) => {
        if(id === null) form.resetFields();
        const sampleKpi1 = id && await getKpi(id);
        dispatch(openModal(sampleKpi1));
        setIsOpenModal(true);
    }
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
                            onClick={() => updateSampleKpi(null)}
                        >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <PlusCircleOutlined style={{ marginRight: '5px' }} />
                                <div>Add KPI template</div>
                            </div>
                        </Button>
                    </Col>
                </Row>
                <div className="kpi-list">
                    {data.map((item, index) => (
                        <div className="kpi-item" key={index}>
                            <div className="kpi-item-top">
                                <Link to={`/manage-kpi/${item.id}`} state={item}>
                                    <h2 className="kpi-item-title">{item.name}</h2>
                                </Link>
                                <p className="kpi-item-target">{item.quantity} KPIs</p>
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
                                        strokeColor={item.percentage >= 90 ? "#14F396" : item.percentage > 50 ? "#1814f3" : "#f31414"}
                                    />
                                </Flex>
                                <div className="kpi-item-act">
                                    <Popconfirm
                                        title="Are you sure to delete this KPI?"
                                        onConfirm={() => deleteKpi(item.id)}
                                        okText="Yes"
                                        cancelText="No"
                                        placement='bottom'
                                    >
                                        <button className="kpi-item-delete"><DeleteOutlined /></button>
                                    </Popconfirm>
                                    <button className="kpi-item-edit" onClick={() => updateSampleKpi(item.id)}><EditOutlined /></button>
                                </div>
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
                    targets={targets}
                />
            </div>
        </div>
    );
};

export default ManageKPI;
