import React from 'react';
import { Form, Input, Upload, Button, Row, Col, Table } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';

const columns = [
  {
    title: 'Name',
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
      <h1>Thông tin chung:</h1>
      <Row gutter={[20, 10]}>
        <Col xs={24} sm={12}>
          <Form.Item name="name" label="Name:">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="thumbnail" label="Link avatar:">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24}>
          <Form.Item name="description" label="Mô tả:">
            <TextArea />
          </Form.Item>
        </Col>
      </Row>

      <h1>Danh sách mục tiêu:</h1>
      <Row gutter={[20, 10]}>
        <Col xs={24} sm={12}>
          <Form.Item name="nameTarget" label="Tên mục tiêu:">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="unit" label="Đơn vị:">
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
