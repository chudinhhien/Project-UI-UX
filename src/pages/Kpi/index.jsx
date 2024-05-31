import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, Flex, Progress } from "antd";


function Kpi() {
    const location = useLocation();
    const { state } = location;
    const name = state.name;
    console.log(state);
    const breadcrumbStyle = {
        marginBottom: "20px",
        marginTop: "25px",
        cursor: "pointer", // Thiết lập kiểu con trỏ
    };

    return (
        <>
            <div
                className="custom-container"
            >
                <Breadcrumb separator=">" style={breadcrumbStyle}>
                    <Breadcrumb.Item>
                        <Link to="/manage-kpi">Manage KPI</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{name}</Breadcrumb.Item>
                </Breadcrumb>
                <h1 className="page-title">{state.name}</h1>
                {state.kpis && state.kpis.map((item, index) => (
                    <div className="item-kpi">
                        <div className="item-kpi-info">
                            <Link
                                to={`/manage-kpi/${state.id}/${item.id}`}
                                key={index}
                                state={{...item,typeId: state.id}}
                            >
                                <h2 className="item-kpi-name">{item.name}</h2>
                            </Link>
                            <p className="item-kpi-desc">
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
                        <div className="item-kpi-act">
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
                            <div className="item-kpi-btn-act">
                                <button className="item-kpi-btn">
                                    Cập nhật
                                </button>
                                <button className="item-kpi-btn btn-remove">
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
