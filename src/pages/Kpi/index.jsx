
// import { Link, useLocation } from "react-router-dom";

// import { Breadcrumb, Flex, Progress } from "antd";


// function Kpi() {
//     const location = useLocation();
//     const { kpi } = location.state|| {};
//     const breadcrumbStyle = {
//         marginBottom: "20px",
//         marginTop: "25px",
//         cursor: "pointer", // Thiết lập kiểu con trỏ
//     };
//     console.log(kpi);

//     return (
//         <>
//             <div
//                 className="custom-container"
//                 style={{ backgroundColor: "#E6E5FE" }}
//             >
//                 <Breadcrumb separator=">" style={breadcrumbStyle}>
//                     <Breadcrumb.Item>
//                         <Link to="/manage-kpi">Manage KPI</Link>
//                     </Breadcrumb.Item>
//                     <Breadcrumb.Item>{kpi.category}</Breadcrumb.Item>
//                 </Breadcrumb>
//                 <h1 className="page-title">{kpi.category}</h1>
//                 {kpi.objectives.map((item, index) => (
//                     <div className="kpi-item">
//                         <div className="kpi-item-info">
//                             <Link
//                                 to={`/manage-kpi/${kpi.category}/${item.name}`}
//                                 state={{ ...item, typeKpi: kpi.category }}
//                                 key={index}
//                             >
//                                 <h2 className="kpi-item-name">{item.name}</h2>
//                             </Link>
//                             <p className="kpi-item-desc">
//                                 Lorem, ipsum dolor sit amet consectetur
//                                 adipisicing elit. Provident nostrum totam amet
//                                 minima tenetur unde excepturi. Accusamus tempora
//                                 earum officiis non consectetur expedita eius
//                                 blanditiis dolorem beatae accusantium itaque
//                                 corporis odit soluta commodi quam excepturi
//                                 natus culpa repellendus, ratione odio id libero
//                                 quasi voluptas nisi? Cum placeat quis similique
//                                 dolorum.
//                             </p>
//                         </div>
//                         <div className="kpi-item-act">
//                             <Flex
//                                 vertical
//                                 gap="small"
//                                 style={{
//                                     width: 180,
//                                 }}
//                             >
//                                 <Progress
//                                     percent={50}
//                                     strokeWidth={8}
//                                     strokeColor="#52c41a"
//                                     status="active"
//                                 />
//                             </Flex>
//                             <div className="kpi-item-btn-act">
//                                 <button className="kpi-item-btn">
//                                     Cập nhật
//                                 </button>
//                                 <button className="kpi-item-btn btn-remove">
//                                     Xóa
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }

// export default Kpi;
