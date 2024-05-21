import { Breadcrumb, Button, Col, Modal, Row } from 'antd';
import { useState } from 'react';
import FormAddKPI from '../../components/FormAddKPI';
import ItemKpiType from '../../components/ItemKpiType';
import './ManageKPI.css';

const MODAL_WIDTH = 1230;

function ManageKPI() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const showModal = () => setIsOpenModal(true);
  const handleOk = () => setIsOpenModal(false);
  const handleCancel = () => setIsOpenModal(false);

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
        {[...Array(3)].map((_, index) => (
          <Col key={index} xs={24} sm={8}>
            <ItemKpiType />
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
        <FormAddKPI />
      </Modal>
    </div>
  );
}

export default ManageKPI;
