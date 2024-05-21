import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Progress, Row, Col } from "antd";
import Calendar from "react-calendar";

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
                    size: 16, // Kích thước font chữ của nhãn
                },
            },
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
    },
};

const Dashboard = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="dashboard">
            <Row>
                <h1 className="dashboard-title">Dashboard</h1>
            </Row>
            <Row gutter={40} style={{marginBottom: '40px'}}>
                <Col className="gutter-row" xs={24} md={12}>
                    <div className="kpi-diagram">
                        <h2 className="kpi-diagram-title">
                            Weekly KPI Progress
                        </h2>
                        <Line
                            options={options}
                            data={data}
                            height={110}
                            minWidth="100px"
                        />
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={12}>
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
                </Col>
            </Row>
            <Row gutter={40}>
                <Col className="gutter-row" xs={24} md={12}>
                    <div className="calendar-container">
                        <Calendar onChange={setDate} value={date} />
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={12}></Col>
            </Row>
        </div>
    );
};

export default Dashboard;