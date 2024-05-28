import { Button, Col, Form, Input, Row, Switch } from "antd";

function Security() {
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col sm={24}>
          <h3>Two-factor Authentication</h3>
        </Col>
        <Col sm={24} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '20px' }}>
            <Switch defaultChecked />
          </div>
          <div>
            <h3 style={{ fontSize: '13px' }}>Enable or disable two factor authentication</h3>
          </div>
        </Col>

        <Col sm={24}>
          <h3>Change password</h3>
        </Col>
        <Form layout="vertical" style={{ width: '510px' }}>
          <Col sm={24}>
            <Form.Item name="currentPassword" label="Current Password">
              <Input />
            </Form.Item>
          </Col>
          <Col sm={24}>
            <Form.Item name="newPassword" label="New Password">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Row style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              <Button type="primary">Save</Button>
            </Row>
          </Col>
        </Form>
      </Row>


    </>
  )
}

export default Security;