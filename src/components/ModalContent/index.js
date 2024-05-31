import React, { useEffect, useState } from 'react';
import { Form, Input, Upload, Button, Row, Col, Table } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { useSelector } from 'react-redux';

const columns = [
  {
    title: 'Name target',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Unit',
    dataIndex: 'unit',
    key: 'unit',
  },
]

const ModalContent = ({ form }) => {
  const sampleKpi = useSelector(state => state.modal);
  const initialTargets = sampleKpi && sampleKpi.target ? sampleKpi.target : []; // Kiểm tra xem sampleKpi và sampleKpi.target có tồn tại không
  const [targets, setTargets] = useState(initialTargets);

  const handleAddTarget = () => {
    const nameTarget = form.getFieldValue("nameTarget");
    const unit = form.getFieldValue("unit");
    const newTarget = { name: nameTarget, unit: unit };
    setTargets([...targets, newTarget]);
    form.setFieldsValue({ nameTarget: "", unit: "" });
  };

  useEffect(() => {
    form.setFieldsValue({ target: targets }); // Cập nhật giá trị của trường 'target' trong form khi có thay đổi trong state
  }, [targets, form]);

  return (
    <Form layout='vertical' form={form} initialValues={sampleKpi}>
      <Form.Item name="id" hidden>
        <Input />
      </Form.Item>
      <Row gutter={[20, 10]}>
        <Col xs={24}>
          <Form.Item name="name" label="KPI Name:" style={{ marginBottom: 0 }}>
            <Input placeholder="Enter KPI name" />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="description" label="Description:" style={{ marginBottom: 0 }}>
            <TextArea placeholder="Enter description" />
          </Form.Item>
        </Col>
      </Row>

      <span className='form-row-title'>Add target</span>
      <Row gutter={[20, 10]}>
        <Col xs={24} sm={12}>
          <Form.Item name="nameTarget" label="Name target:" style={{ marginBottom: 0 }}>
            <Input placeholder="Enter target name" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="unit" label="Unit:" style={{ marginBottom: 0 }}>
            <Input placeholder="Enter unit" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={8}>
          <Upload>
            <Button icon={<UploadOutlined />}>Import file</Button>
          </Upload>
        </Col>
      </Row>
      <Row justify="end" gutter={[20, 20]}>
        <Col>
          <Button onClick={handleAddTarget} style={{ marginBottom: '20px',backgroundColor: '#1814f2',color: '#ffff' }}>Add Target</Button>
        </Col>
      </Row>
      <Form.Item name="target">
        <Table columns={columns} dataSource={targets} />
      </Form.Item>
    </Form>
  );
};

export default ModalContent;
