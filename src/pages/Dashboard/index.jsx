import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Progress, Row, Col, Checkbox } from "antd";
import Calendar from "react-calendar";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import moment from 'moment';
// import 'react-calendar/dist/Calendar.css';

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

const slideImages = [
    {
        url: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR0NrOJEpfjkM0zxD-aO9b-bWqW3mhY57jPMg3aSbxTYO__R4jOvx8T2Oa7Fm9yxXOGg4B_ns3SZaZGCiBOPQw",
        caption: "Slide 1",
    },
    {
        url: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR0NrOJEpfjkM0zxD-aO9b-bWqW3mhY57jPMg3aSbxTYO__R4jOvx8T2Oa7Fm9yxXOGg4B_ns3SZaZGCiBOPQw",
        caption: "Slide 2",
    },
    {
        url: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR0NrOJEpfjkM0zxD-aO9b-bWqW3mhY57jPMg3aSbxTYO__R4jOvx8T2Oa7Fm9yxXOGg4B_ns3SZaZGCiBOPQw",
        caption: "Slide 3",
    },
];

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom",
            labels: {
                color: "#000",
                font: {
                    size: 16,
                },
            },
        },
    },
    scales: {
        y: {
            min: 0,
            max: 100,
        },
    },
};

const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap:"wrap",
    gap:"20px",
    height: "300px",
    backgroundSize: "cover",
};

// const spanStyle = {
//     padding: "20px",
//     background: "#efefef",
//     color: "#000000",
// };

const Dashboard = () => {
    const [date, setDate] = useState(new Date());
    const [tasks, setTasks] = useState({
        "2024-05-20": [
            { task: "Task 1", completed: false },
            { task: "Task 2", completed: false },
        ],
        "2024-05-21": [
            { task: "Task 3", completed: true },
            { task: "Task 4", completed: false },
        ],
        "2024-05-22": [
            { task: "Task 5", completed: false },
            { task: "Task 6", completed: false },
        ],
        "2024-05-23": [
            { task: "Task 7", completed: false },
            { task: "Task 8", completed: false },
        ],
        "2024-05-24": [
            { task: "Task 9", completed: false },
            { task: "Task 10", completed: false },
        ],
    });

    const handleTaskChange = (dateString, index) => {
        console.log(dateString);
        setTasks((prevTasks) => {
            const newTasks = { ...prevTasks };
            newTasks[dateString][index].completed =
                !newTasks[dateString][index].completed;
            return newTasks;
        });
    };

    const selectedDateString = moment.utc(date).format("YYYY-MM-DD");

    const selectedTasks = tasks[selectedDateString] || [];

    const tileClassName = ({ date, view }) => {
        if (view === "month") {
            const dateString = moment.utc(date).format("YYYY-MM-DD");
            const dayTasks = tasks[dateString] || [];
            const currentDate = new Date();
            const isPastDate =
                date < currentDate &&
                date.toDateString() !== currentDate.toDateString();
            if (isPastDate && dayTasks.some((task) => !task.completed)) {
                return "react-calendar__tile--hasIncompletePrevTasks";
            }
            if (
                !isPastDate &&
                dayTasks.length > 0 &&
                !dayTasks.every((task) => task.completed)
            ) {
                return "react-calendar__tile--hasTasks";
            }
        }
        return null;
    };

    return (
        <div className="dashboard custom-container">
            <Row>
                <h1 className="dashboard-title">Dashboard</h1>
            </Row>
            <Row gutter={40}>
                <Col
                    className="gutter-row"
                    xs={24}
                    md={12}
                    style={{ marginBottom: "20px" }}
                >
                    <div className="kpi-diagram">
                        <h2 className="kpi-diagram-title">
                            Weekly KPI Progress
                        </h2>
                        <Line
                            options={{
                                ...options,
                                maintainAspectRatio: false // Tắt tỷ lệ khung hình
                            }}
                            data={data}
                            height="130.5px"
                            minWidth="100px"
                        />
                    </div>
                </Col>
                <Col
                    className="gutter-row"
                    xs={24}
                    md={12}
                    style={{ marginBottom: "20px" }}
                >
                    <Slide>
                        {slideImages.map((slideImage, index) => (
                            <div key={index}>
                                <div
                                    style={{
                                        ...divStyle,
                                        backgroundImage: `url(${slideImage.url})`,
                                    }}
                                >
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
                                    <div className="kpi-box-info">
                                        <h3 className="kpi-box-info-title">Học tập</h3>
                                        <p>Tăng <strong>10%</strong> so với tháng trước</p>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slide>
                </Col>
            </Row>
            <Row gutter={40}>
                <Col
                    className="gutter-row"
                    xs={24}
                    md={12}
                    style={{ marginBottom: "20px" }}
                >
                    <div className="dashboard-calendar">
                        <Calendar
                            onChange={setDate}
                            value={date}
                            tileClassName={tileClassName}
                        />
                    </div>
                </Col>
                <Col
                    className="gutter-row"
                    xs={24}
                    md={12}
                    style={{ marginBottom: "20px" }}
                >
                    <div className="dashboard-daytask">
                        <h3>Recent tasks for {moment.utc(selectedDateString).add(1, 'day').format("YYYY-MM-DD")}</h3>
                        {console.log(selectedDateString)}
                        <div className="dashboard-list">
                            {selectedTasks.length === 0 ? (
                                <p>No tasks for this day.</p>
                            ) : (
                                selectedTasks.map((task, index) => (
                                    <div
                                        key={index}
                                        className={`dashboard-task ${
                                            task.completed ? "completed" : ""
                                        }`}
                                    >
                                        <Checkbox
                                            checked={task.completed}
                                            onChange={() =>
                                                handleTaskChange(
                                                    selectedDateString,
                                                    index
                                                )
                                            }
                                        >
                                            {task.task}
                                        </Checkbox>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
