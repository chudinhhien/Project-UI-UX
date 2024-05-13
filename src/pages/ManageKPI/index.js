import { Button, Modal } from 'antd'
import { useState } from 'react';
import FormAddKPI from '../../components/FormAddKPI';
import './ManageKPI.css'
function ManageKPI() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const showModal = () => {
    setIsOpenModal(true);
  }
  const handleOk = () => {
    setIsOpenModal(false);
  }
  const handleCancel = () => {
    setIsOpenModal(false);
  }
  return (
    <>
      <h1>Manage KPI</h1>
      <Button type='primary' onClick={showModal}>
        Add KPI
      </Button>
      <Modal
        title='ADD KPI'
        open={isOpenModal} onOk={handleOk} onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Save KPI
          </Button>
        ]}
        width={1230}>
        <FormAddKPI />
      </Modal >
    </>
  )
}

export default ManageKPI;