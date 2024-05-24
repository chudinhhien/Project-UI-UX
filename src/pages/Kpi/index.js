import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getKpis } from '../../services/kpiService';
import { Breadcrumb } from 'antd';
import { getKpiType } from '../../services/kpiTypesService';

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
        console.error('Error fetching data:', error);
      }
    };
    fetchKpis();
  }, [id])

  let typeName = kpiType.length > 0 ? kpiType[0].name : '';

  const breadcrumbStyle = {
    marginBottom: '20px',
    marginTop: '25px',
    cursor: 'pointer', // Thiết lập kiểu con trỏ
  };

  return (
    <>
      <div className="custom-container" style={{ backgroundColor: '#E6E5FE' }}>
        <Breadcrumb separator=">" style={breadcrumbStyle}>
          <Breadcrumb.Item>
            <Link to="/manage-kpi">Manage KPI</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{typeName}</Breadcrumb.Item>
        </Breadcrumb>
        {kpis.map((item, index) => (
          <Link to={`/manage-kpi/${id}/${item.id}`} state={{...item,"typeKpi": typeName}} key={index}>
            <div>
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Kpi;
