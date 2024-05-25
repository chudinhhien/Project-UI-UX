import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Progress, Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function KpiDetail() {
    const location = useLocation();
    const breadcrumbStyle = {
        marginBottom: "20px",
        marginTop: "25px",
        cursor: "pointer", // Thiết lập kiểu con trỏ
    };

    // Check if location.state exists before accessing its properties
    const kpiTypeId = location.state ? location.state.kpiTypeId : "";
    const typeKpi = location.state ? location.state.typeKpi : "";
    const id = location.state ? location.state.id : "";
    const name = location.state ? location.state.name : "";

    return (
        <>
            <div className="custom-container" style={{padding: "0 20px"}}>
                <Breadcrumb separator=">" style={breadcrumbStyle}>
                    <Breadcrumb.Item>
                        <Link to="/manage-kpi">Manage KPI</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={`/manage-kpi/${kpiTypeId}`}>{typeKpi}</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{name}</Breadcrumb.Item>
                </Breadcrumb>
                <div className="kpi-detail">
                    <Row gutter={40} className="kpi-detail-header">
                        <Col
                            className="gutter-row kpi-detail-info"
                            xs={24}
                            md={12}
                        >
                            <h1 className="kpi-detail-title">{name}</h1>
                            <div className="kpi-detail-complete">
                                Complete: <strong>42/60</strong>
                            </div>
                            <div className="kpi-detail-deadline">
                                Deadline: <strong>31/5/2023</strong> (5 day
                                left)
                            </div>
                            <button className="kpi-detail-btn">
                                Report{" "}
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="icon"
                                />
                            </button>
                        </Col>
                        <Col
                            className="gutter-row kpi-detail-progress"
                            xs={24}
                            md={12}
                        >
                            <Progress
                                type="circle"
                                trailColor="#9B9AF9"
                                strokeColor="#1814F2"
                                percent={70}
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
                </div>
            </div>
        </>
    );
}

export default KpiDetail;
