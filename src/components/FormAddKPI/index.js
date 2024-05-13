import { Form, Col, Row, Divider, Input, Select, InputNumber, Table } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { getKpiTypes } from '../../services/kpiTypesService';
import { useEffect, useState } from 'react';

function FormAddKPI() {
  const [kpiTypes, setKpiTypes] = useState([]);

  useEffect(() => {
    // Fetch data khi component được mount
    async function fetchKpiTypes() {
      const data = await getKpiTypes();
      setKpiTypes(data);
    }
    fetchKpiTypes();
  }, []); // Chạy chỉ một lần khi component được mount
  
  return (
    <>
      <Form layout='vertical'>
        <Divider orientation="left">Thông tin chung</Divider>
        <Row gutter={12}>
          <Col span={8}>
            <Form.Item
              label="Tên KPI"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please enter KPI name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Loại KPI"
              name="type"
              rules={[
                {
                  required: true,
                  message: 'Please enter KPI type!',
                },
              ]}
            >
              <Select options={kpiTypes}/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Độ ưu tiên"
              name="important"
              rules={[
                {
                  required: true,
                  message: 'Please enter KPI type!',
                },
              ]}
            >
              <Select />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Mô tả" name="description">
              <TextArea />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Form layout='vertical'>
        <Divider orientation="left">Danh sách mục tiêu</Divider>
        <Row gutter={12}>
          <Col span={12}>
            <Form.Item
              label="Tên mục tiêu"
              name="targetName"
              rules={[
                {
                  required: true,
                  message: 'Please enter target name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Trọng số"
              name="trongSo"
              rules={[
                {
                  required: true,
                  message: 'Please enter trong so!',
                },
              ]}
            >
              <InputNumber min={0} max={1} style={{width: '100%'}}/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Chỉ tiêu"
              name=""
              rules={[
                {
                  required: true,
                  message: 'Please enter!',
                },
              ]}
            >
              <InputNumber min={0} style={{width: '100%'}}/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Trên" name="">
              <Select />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table/>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default FormAddKPI;
