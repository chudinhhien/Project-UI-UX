// ManageKPI.js
import React, { useState, useEffect } from 'react';
import { Breadcrumb, Button, Col, Form, Row, message } from 'antd';
import { getKpiTypes, addKpiType } from '../../services/kpiTypesService';
import ModalComponent from '../../components/ModalComponent';
import ItemKpiType from '../../components/ItemKpiType';

const ManageKPI = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [kpiTypes, setKpiTypes] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [targets, setTargets] = useState([]);

  const showMessage = (type, content) => {
    messageApi.open({
      type,
      content,
    });
  };

  const handleAddTarget = () => {
    const nameTarget = form.getFieldValue('nameTarget');
    const unit = form.getFieldValue('unit');
    const newTarget = { name: nameTarget, unit: unit };
    setTargets([...targets, newTarget]);
    form.setFieldsValue({ nameTarget: '', unit: '' });
  };

  const handleOk = async () => {
    try {
      const formData = form.getFieldsValue();
      const tableData = targets.map((target, index) => ({ ...target, key: index }));

      const newKpiTypeData = {
        name: formData.name,
        thumbnail: formData.thumbnail,
        description: formData.description,
        target: tableData,
      };

      //await addKpiType(newKpiTypeData);
      setIsOpenModal(false);
      showMessage('success', 'KPI added successfully!');
      //const updatedKpiTypes = await getKpiTypes();
      //setKpiTypes(updatedKpiTypes);
      form.resetFields();
      setTargets([]);
    } catch (error) {
      console.log(error.message);
      showMessage('error', 'Failed to add KPI. Please try again.');
    }
  };

  const handleCancel = () => {
    setIsOpenModal(false);
    form.resetFields();
    setTargets([]);
  };

  useEffect(() => {
    async function fetchKpiTypes() {
      const data = await getKpiTypes();
      setKpiTypes(data);
    }
    fetchKpiTypes();
  }, []);

  return (
    <>
      {contextHolder}
      <div className="custom-container" style={{ backgroundColor: '#E6E5FE' }}>
        <Row justify="space-between" align="middle" style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item>Manage KPI</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col>
            <Button type="primary" onClick={() => setIsOpenModal(true)}>
              Add KPI
            </Button>
          </Col>
        </Row>
        <Row gutter={30}>
          {kpiTypes.map((item, index) => (
            <Col key={index} xs={24} sm={8}>
              <ItemKpiType item={item} />
            </Col>
          ))}
        </Row>
        <ModalComponent
          isOpenModal={isOpenModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
          form={form}
          handleAddTarget={handleAddTarget}
          targets={targets}
        />
      </div>
    </>
  );
};

export default ManageKPI;
