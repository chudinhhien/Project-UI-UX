import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getKpis } from "../../services/kpiService";
import { Breadcrumb, Flex, Progress } from "antd";
import { getKpiType } from "../../services/kpiTypesService";

function Kpi() {
    let { id } = useParams();
    const [kpis, setKpis] = useState([]);
    const [kpiType, setKpiType] = useState([]);

    useEffect(() => {
        const fetchKpis = async () => {
            try {
                const data1 = await getKpiType(id);
                const data = await getKpis(id);
                setKpis(data);
                setKpiType(data1);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchKpis();
    }, [id]);

    let typeName = kpiType.length > 0 ? kpiType[0].name : "";

    const breadcrumbStyle = {
        marginBottom: "20px",
        marginTop: "25px",
        cursor: "pointer", // Thiết lập kiểu con trỏ
    };

    return (
        <>
            <div
                className="custom-container"
                style={{ backgroundColor: "#E6E5FE" }}
            >
                <Breadcrumb separator=">" style={breadcrumbStyle}>
                    <Breadcrumb.Item>
                        <Link to="/manage-kpi">Manage KPI</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Giảng dạy</Breadcrumb.Item>
                </Breadcrumb>
                <h1 className="page-title">Giảng dạy</h1>
                {kpis.map((item, index) => (
                    <div className="kpi-item">
                        <div className="kpi-item-info">
                            <Link
                                to={`/manage-kpi/${id}/${item.id}`}
                                state={{ ...item, typeKpi: typeName }}
                                key={index}
                            >
                                <h2 className="kpi-item-name">{item.name}</h2>
                            </Link>
                            <p className="kpi-item-desc">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Provident nostrum totam amet
                                minima tenetur unde excepturi. Accusamus tempora
                                earum officiis non consectetur expedita eius
                                blanditiis dolorem beatae accusantium itaque
                                corporis odit soluta commodi quam excepturi
                                natus culpa repellendus, ratione odio id libero
                                quasi voluptas nisi? Cum placeat quis similique
                                dolorum.
                            </p>
                        </div>
                        <div className="kpi-item-act">
                            <Flex
                                vertical
                                gap="small"
                                style={{
                                    width: 180,
                                }}
                            >
                                <Progress
                                    percent={50}
                                    strokeWidth={8}
                                    strokeColor="#52c41a"
                                    status="active"
                                />
                            </Flex>
                            <div className="kpi-item-btn-act">
                                <button className="kpi-item-btn">
                                    Cập nhật
                                </button>
                                <button className="kpi-item-btn btn-remove">
                                    Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Kpi;
