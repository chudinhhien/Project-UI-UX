import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Flex, Progress, Carousel, Calendar, theme, Breadcrumb } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
};

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
    labels,
    datasets: [
        {
            label: "Học tập",
            data: [0, 10, 20, 40, 50, 60, 70],
            borderColor: "#7549FF",
            backgroundColor: "#7549FF",
        },
        {
            label: "Nghiên cứu",
            data: [0, 20, 10, 50, 60, 65, 75],
            borderColor: "red",
            backgroundColor: "red",
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom",
            labels: {
                color: "#000",
                font: {
                    size: 16 // Kích thước font chữ của nhãn
                }
            }
        },
    },
    scales: {
        y: {
            min: 0,
            max: 100,
            // ticks: {
            //     color: "#000", // Màu của nhãn trục y
            // }
        },
        // x: {
        //     ticks: {
        //         color: "#000", // Màu của nhãn trục x
        //     }
        // }
    }
};


const contentStyle = {
    color: "#000",
    textAlign: "center",
    background: "#FFF",
    borderRadius: "16.893px",
};

const Dashboard = () => {
    const [completedKpis, setCompletedKpis] = useState({});

    const handleCompleteKpi = (index) => {
        setCompletedKpis((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    const { token } = theme.useToken();
    const wrapperStyle = {
        width: 375,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    return (
        <div className="dashboard">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-8 m-12 c-12 left">
                        <Breadcrumb
                            style={{
                                marginTop: '16px',
                            }}
                        >
                            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="kpi-diagram">
                            <h2 className="kpi-diagram-title">Weekly KPI Progress</h2>
                            <Line
                                options={options}
                                data={data}
                                height={110}
                                minWidth="100px"
                            />
                        </div>
                        <div className="row">
                            <div className="dashboard-kpi col l-4 m-12 c-12">
                                <Carousel afterChange={onChange}>
                                    <div>
                                        <h3 style={contentStyle}>
                                            <Flex gap="small" wrap>
                                                <p>Học tập</p>
                                                <Progress
                                                    type="circle"
                                                    trailColor="#9B9AF9"
                                                    strokeColor="#1814F2"
                                                    percent={75}
                                                    strokeWidth={12}
                                                    size={180}
                                                    format={(percent) => (
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "18px",
                                                                fontWeight:
                                                                    "bold",
                                                                color: "#1814F2",
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
                                                            {percent}%
                                                        </span>
                                                    )}
                                                />
                                            </Flex>
                                        </h3>
                                    </div>
                                    <div>
                                        <h3 style={contentStyle}>
                                            <Flex gap="small" wrap>
                                                <p>Học tập</p>
                                                <Progress
                                                    type="circle"
                                                    trailColor="#9B9AF9"
                                                    strokeColor="#1814F2"
                                                    percent={75}
                                                    strokeWidth={12}
                                                    size={180}
                                                    format={(percent) => (
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "18px",
                                                                fontWeight:
                                                                    "bold",
                                                                color: "#1814F2",
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
                                                            {percent}%
                                                        </span>
                                                    )}
                                                />
                                            </Flex>
                                        </h3>
                                    </div>
                                    <div>
                                        <h3 style={contentStyle}>
                                            <Flex gap="small" wrap>
                                                <p>Học tập</p>
                                                <Progress
                                                    type="circle"
                                                    trailColor="#9B9AF9"
                                                    strokeColor="#1814F2"
                                                    percent={75}
                                                    strokeWidth={12}
                                                    size={180}
                                                    format={(percent) => (
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "18px",
                                                                fontWeight:
                                                                    "bold",
                                                                color: "#1814F2",
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
                                                            {percent}%
                                                        </span>
                                                    )}
                                                />
                                            </Flex>
                                        </h3>
                                    </div>
                                    <div>
                                        <h3 style={contentStyle}>
                                            <Flex gap="small" wrap>
                                                <p>Học tập</p>
                                                <Progress
                                                    type="circle"
                                                    trailColor="#9B9AF9"
                                                    strokeColor="#1814F2"
                                                    percent={75}
                                                    strokeWidth={12}
                                                    size={180}
                                                    format={(percent) => (
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "18px",
                                                                fontWeight:
                                                                    "bold",
                                                                color: "#1814F2",
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
                                                            {percent}%
                                                        </span>
                                                    )}
                                                />
                                            </Flex>
                                        </h3>
                                    </div>
                                </Carousel>
                            </div>
                            <div className="dashboard-calendar col l-4 m-12 c-12">
                                <div style={wrapperStyle}>
                                    <Calendar
                                        fullscreen={false}
                                        onPanelChange={onPanelChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 m-12 c-12 right">
                        <p className="title">KPI of the week</p>
                        <div className="list-kpi">
                            {[
                                {
                                    title: "Tiếng Nhật",
                                    type: "Học tập",
                                    details: "Học được 100/250 từ vựng",
                                    complete: "40%",
                                    deadline: "Week",
                                },
                                {
                                    title: "Giải tích",
                                    type: "Học tập",
                                    details: "Số giờ học 3/9",
                                    complete: "33%",
                                    deadline: "Week",
                                },
                            ].map((kpi, index) => (
                                <div
                                    key={index}
                                    className={`item-kpi ${completedKpis[index] ? "completed" : ""
                                        }`}
                                >
                                    <div className="item-kpi-top">
                                        <p className="item-kpi-order">
                                            {index + 1}
                                        </p>
                                        <p className="item-kpi-deadline">
                                            {kpi.deadline}
                                        </p>
                                    </div>
                                    <div className="item-kpi-info">
                                        <div className="item-kpi-info-row">
                                            <h5 className="item-kpi-title">
                                                {kpi.title}
                                            </h5>
                                            <p className="item-kpi-type">
                                                {kpi.type}
                                            </p>
                                        </div>
                                        <div className="item-kpi-info-row">
                                            <p className="item-kpi-ders">
                                                {kpi.details}
                                            </p>
                                            <p className="item-kpi-complete">
                                                {kpi.complete}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="title kpi-day">KPI of the day</p>
                        <div className="list-kpi">
                            {[
                                {
                                    title: "Nhật 5",
                                    type: "Học tập",
                                    details: "Tham gia lớp học tiếng Nhật",
                                    deadline: "8:15 am",
                                },
                                {
                                    title: "Giải tích",
                                    type: "Học tập",
                                    details: "Tham gia lớp học giải tích",
                                    deadline: "10:30 am",
                                },
                            ].map((kpi, index) => (
                                <div
                                    key={index + 2}
                                    className={`item-kpi ${completedKpis[index + 2]
                                            ? "completed"
                                            : ""
                                        }`}
                                >
                                    <div className="item-kpi-top">
                                        <p className="item-kpi-order">
                                            {index + 1}
                                        </p>
                                        <p className="item-kpi-deadline">
                                            {kpi.deadline}
                                        </p>
                                    </div>
                                    <div className="item-kpi-info">
                                        <div className="item-kpi-info-row">
                                            <h5 className="item-kpi-title">
                                                {kpi.title}
                                            </h5>
                                            <p className="item-kpi-type">
                                                {kpi.type}
                                            </p>
                                        </div>
                                        <div className="item-kpi-info-row">
                                            <p className="item-kpi-ders">
                                                {kpi.details}
                                            </p>
                                            <button
                                                onClick={() =>
                                                    handleCompleteKpi(index + 2)
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faCheck}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
