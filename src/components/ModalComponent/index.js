// ModalComponent.js
import React from 'react';
import { Modal, Button } from 'antd';
import ModalContent from '../ModalContent';

const ModalComponent = ({ isOpenModal, handleOk, handleCancel, form, handleAddTarget , targets}) => {
  return (
    <Modal
      title="Add Kpi Type"
      visible={isOpenModal}
      onOk={handleOk}
      onCancel={handleCancel}
      // width={600}
      style={{ top: 0 }}
      footer={[
        <Button key="submit" type="primary" onClick={handleOk} style={{backgroundColor: '#1814f2',color: '#ffff'}}>
          Save KPI Type
        </Button>,
      ]}
    >
      <ModalContent form={form} handleAddTarget={handleAddTarget} targets={targets}/>
    </Modal>
  );
};

export default ModalComponent;
