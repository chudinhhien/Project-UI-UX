import React from "react";
import { Line } from "react-chartjs-2";
import { Flex, Progress } from "antd";
import { Carousel } from "antd";
import { Calendar, theme } from "antd";
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
            label: "Dataset 1",
            data: [0, 10, 20, 40, 50, 60, 70],
            borderColor: "#7549FF",
            backgroundColor: "#7549FF",
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Weekly KPI Progress",
        },
    },
    scales: {
        y: {
            min: 0,
            max: 100,
        },
    },
};

const contentStyle = {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    height: "320px",
    color: "#000",
    lineHeight: "200px",
    textAlign: "center",
    background: "#FFF",
    borderRadius: "16.893px",
};

const Dashboard = () => {
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
            <div className="inner">
                <div className="inner-left">
                    <h1 className="dashboard-title">Dashboard</h1>
                    <div className="inner-left-top">
                        <Line options={options} data={data} height={110} />
                    </div>
                    <div className="inner-left-bottom">
                        <div className="dashboard-kpi">
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
                                                            fontSize: "18px",
                                                            fontWeight: "bold",
                                                            color: "#1814F2",
                                                            textAlign: "center",
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
                                                            fontSize: "18px",
                                                            fontWeight: "bold",
                                                            color: "#1814F2",
                                                            textAlign: "center",
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
                                                            fontSize: "18px",
                                                            fontWeight: "bold",
                                                            color: "#1814F2",
                                                            textAlign: "center",
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
                                                            fontSize: "18px",
                                                            fontWeight: "bold",
                                                            color: "#1814F2",
                                                            textAlign: "center",
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
                        <div className="dashboard-calendar">
                            <div style={wrapperStyle}>
                                <Calendar
                                    fullscreen={false}
                                    onPanelChange={onPanelChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inner-right">
                    <p>Upcoming Deadline</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
