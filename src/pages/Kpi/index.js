import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getKpis } from '../../services/kpiService';
import { Breadcrumb } from 'antd';
import { getKpiType } from '../../services/kpiTypesService';

function Kpi() {
  let { id } = useParams();
  const navigate = useNavigate();
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
        console.error('Error fetching data:', error);
      }
    };
    fetchKpis();
  }, [id])

  let typeName = kpiType.length > 0 ? kpiType[0].name : '';

  const breadcrumbStyle = {
    marginBottom: '20px',
    marginTop: '20px',
    cursor: 'pointer', // Thiết lập kiểu con trỏ
  };

  return (
    <>
      <div className="custom-container" style={{ backgroundColor: '#E6E5FE' }}>
        <Breadcrumb style={breadcrumbStyle}>
          <Breadcrumb.Item onClick={() => navigate('/manage-kpi')}>Manage KPI</Breadcrumb.Item>
          <Breadcrumb.Item>{typeName}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </>
  )
}

export default Kpi;
