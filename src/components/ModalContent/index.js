import React from 'react';
import { Form, Input, Upload, Button, Row, Col, Table } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';

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

const ModalContent = ({ form, handleAddTarget, targets }) => {
  return (
    <Form layout='vertical' form={form}>
      <h1>General:</h1>
      <Row gutter={[20, 10]}>
        <Col xs={24} sm={12}>
          <Form.Item name="name" label="Name:" style={{ marginBottom: 0 }}>
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="thumbnail" label="Link avatar:" style={{ marginBottom: 0 }}>
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24}>
          <Form.Item name="description" label="Description:" style={{ marginBottom: 0 }}>
            <TextArea />
          </Form.Item>
        </Col>
      </Row>

      <h1>List target:</h1>
      <Row gutter={[20, 10]}>
        <Col xs={24} sm={12}>
          <Form.Item name="nameTarget" label="Name target:" style={{ marginBottom: 0 }}>
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="unit" label="Unit:" style={{ marginBottom: 0 }}>
            <Input />
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
          <Button type='primary' onClick={handleAddTarget} style={{ marginBottom: '20px' }}>Add Target</Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={targets} />
    </Form>
  );
};

export default ModalContent;
