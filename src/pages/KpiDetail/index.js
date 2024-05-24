import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

function KpiDetail() {
  const location = useLocation();
  const breadcrumbStyle = {
    marginBottom: '20px',
    marginTop: '25px',
    cursor: 'pointer', // Thiết lập kiểu con trỏ
  };

  // Check if location.state exists before accessing its properties
  const kpiTypeId = location.state ? location.state.kpiTypeId : '';
  const typeKpi = location.state ? location.state.typeKpi : '';
  const id = location.state ? location.state.id : '';
  const name = location.state ? location.state.name : '';

  return (
    <>
      <div className="custom-container">
        <Breadcrumb separator=">" style={breadcrumbStyle}>
          <Breadcrumb.Item>
            <Link to="/manage-kpi">Manage KPI</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/manage-kpi/${kpiTypeId}`}>{typeKpi}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {name}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

    </>
  );
}

export default KpiDetail;
