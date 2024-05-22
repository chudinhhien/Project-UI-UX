import { Breadcrumb, Button, Col, Modal, Row } from 'antd';
import { useEffect, useState } from 'react';
import ItemKpiType from '../../components/ItemKpiType';
import './ManageKPI.css';
import { getKpiTypes } from '../../services/kpiTypesService';

const MODAL_WIDTH = 1230;

function ManageKPI() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [kpiTypes, setKpiTypes] = useState([]);
  const showModal = () => setIsOpenModal(true);
  const handleOk = () => setIsOpenModal(false);
  const handleCancel = () => setIsOpenModal(false);
  
  useEffect(() => {
    // Fetch data khi component được mount
    async function fetchKpiTypes() {
      const data = await getKpiTypes();
      setKpiTypes(data);
    }
    fetchKpiTypes();
  }, []);

  console.log(kpiTypes);

  return (
    <div className="custom-container" style={{ backgroundColor: '#E6E5FE' }}>
      <Row justify="space-between" align="middle" style={{ marginTop: '20px', marginBottom: '20px' }}>
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item>Manage KPI</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col>
          <Button type="primary" onClick={showModal}>
            Add KPI
          </Button>
        </Col>
      </Row>
      <Row gutter={30}>
        {kpiTypes.map((item,index) => (
          <Col key={index} xs={24} sm={8}>
            <ItemKpiType item = {item}/>
          </Col>
        ))}
      </Row>
      <Modal
        title="ADD KPI"
        open={isOpenModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Save KPI
          </Button>,
        ]}
        width={MODAL_WIDTH}
      >
      </Modal>
    </div>
  );
}

export default ManageKPI;
