import React, { useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { Progress, Row, Col, Checkbox, Tour } from "antd";
import Calendar from "react-calendar";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import moment from "moment";
import all_imgs from "../../assets/img/all_img";
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
import { helpClose } from "../../actions/Help";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const data = {
    labels,
    datasets: [
        {
            label: "Học tập",
            data: [0, 10, 20, 40, 50, 60, 70],
            borderColor: "#1356f2",
            backgroundColor: "#1356f2",
        },
        {
            label: "Sinh hoạt",
            data: [0, 15, 15, 30, 45, 50, 60],
            borderColor: "#6013f2",
            backgroundColor: "#6013f2",
        },
        {
            label: "Nghiên cứu",
            data: [0, 20, 10, 50, 60, 70, 75],
            borderColor: "#a913f2",
            backgroundColor: "#a913f2",
        },
    ],
};

const slideImages = [
    {
        url: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR0NrOJEpfjkM0zxD-aO9b-bWqW3mhY57jPMg3aSbxTYO__R4jOvx8T2Oa7Fm9yxXOGg4B_ns3SZaZGCiBOPQw",
        caption: "Slide 1",
        title: "Học tập",
        currentKPI:"70",
        lastKPI: "60"
    },
    {
        url: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR0NrOJEpfjkM0zxD-aO9b-bWqW3mhY57jPMg3aSbxTYO__R4jOvx8T2Oa7Fm9yxXOGg4B_ns3SZaZGCiBOPQw",
        caption: "Slide 2",
        title: "Sinh hoạt",
        currentKPI:"60",
        lastKPI: "50"
    },
    {
        url: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR0NrOJEpfjkM0zxD-aO9b-bWqW3mhY57jPMg3aSbxTYO__R4jOvx8T2Oa7Fm9yxXOGg4B_ns3SZaZGCiBOPQw",
        caption: "Slide 3",
        title: "Nghiên cứu",
        currentKPI:"75",
        lastKPI: "70"
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
    padding: "20px 40px",
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "40px",
    height: "190px",
    backgroundSize: "cover",
};

const Dashboard = () => {
    const dispatch = useDispatch();
    const open = useSelector((state) => state.helpReducer);
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

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const steps = [
        {
            title: "Biểu đồ theo dõi tiến độ KPI.",
            description: "Bạn có thể xem tiến độ hoàn thành KPI ở đây nè!.",
            target: () => ref1.current,
        },
        {
            title: "Save",
            description: "Save your changes.",
            target: () => ref2.current,
        },
        {
            title: "Other Actions",
            description: "Click to see other actions.",
            target: () => ref3.current,
        },
    ];

    return (
        <div className="dashboard custom-container">
            <Row>
                <h1 className="dashboard-title">Dashboard</h1>
            </Row>
            <Row gutter={40} style={{ marginBottom: "0" }}>
                <Col className="gutter-row" xs={24} md={12}>
                    <Row>
                        <div className="dashboard-hello">
                            <div>
                                <p>Xin chào, Hiển!</p>
                                <p>
                                    Tuần này bạn đã tăng được{" "}
                                    <strong>5%</strong> KPI
                                </p>
                                <p>Hãy tiếp tục cố gắng nào !!!</p>
                            </div>
                            <img src={all_imgs.hello} alt="" />
                        </div>
                    </Row>
                    <Row>
                        <div className="kpi-diagram" ref={ref1}>
                            <h2 className="kpi-diagram-title">
                                Weekly KPI Progress
                            </h2>
                            <Line
                                options={{
                                    ...options,
                                    maintainAspectRatio: false,
                                }}
                                data={data}
                                height="130.5px"
                                minWidth="100px"
                            />
                        </div>
                    </Row>
                    <Row>
                        <div ref={ref2} style={{ width: "100%" }}>
                            <Slide>
                                {slideImages.map((slideImage, index) => (
                                    <div key={index}>
                                        <div
                                            style={{
                                                ...divStyle,
                                                backgroundImage: `url(${slideImage.url})`,
                                            }}
                                        >
                                            <h2 className="slide-name">
                                                Curent KPI
                                            </h2>
                                            <div className="slide-container">
                                                <Progress
                                                    type="circle"
                                                    // trailColor="#9B9AF9"
                                                    strokeColor="#6664f2"
                                                    percent={slideImage.currentKPI}
                                                    success={{
                                                        percent: slideImage.lastKPI,
                                                        strokeColor: "#1713f2",
                                                    }}
                                                    strokeWidth={12}
                                                    size={100}
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
                                                <div className="kpi-box-info">
                                                    <span>KPI:</span>
                                                    <h3 className="kpi-box-info-title">
                                                        {slideImage.title}
                                                    </h3>
                                                    <span>INFO: </span>
                                                    <p>
                                                        Tăng{" "}
                                                        <strong>10%</strong> so
                                                        với tháng trước
                                                    </p>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slide>
                        </div>
                    </Row>
                </Col>
                <Col className="gutter-row" xs={24} md={12}>
                    <Row>
                        <div className="dashboard-calendar" ref={ref3}>
                            <Calendar
                                onChange={setDate}
                                value={date}
                                tileClassName={tileClassName}
                            />
                        </div>
                    </Row>
                    <Row style={{ width: "100%" }}>
                        <div className="dashboard-daytask">
                            <h3>
                                Recent tasks for {selectedDateString}
                                {/* {moment
                                    .utc(selectedDateString)
                                    .add(1, "day")
                                    .format("YYYY-MM-DD")} */}
                            </h3>
                            {console.log(selectedDateString)}
                            <div className="dashboard-list">
                                {selectedTasks.length === 0 ? (
                                    <p>No tasks for this day.</p>
                                ) : (
                                    selectedTasks.map((task, index) => (
                                        <div
                                            key={index}
                                            className={`dashboard-task ${
                                                task.completed
                                                    ? "completed"
                                                    : ""
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
                    </Row>
                </Col>
            </Row>
            <Tour
                open={open}
                steps={steps}
                onClose={() => dispatch(helpClose())}
            />
        </div>
    );
};

export default Dashboard;
