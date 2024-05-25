import { Col, Form, Input, Row, Switch } from "antd";

function Security() {
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col sm={24}>
          <h3>Two-factor Authentication</h3>
        </Col>
        <Col sm={2}>
          <Switch defaultChecked />
        </Col>
        <Col sm={7}>
          <h3>Enable or disable two factor authentication</h3>
        </Col>
        <Col sm={24}>
          <h3>Change password</h3>
        </Col>
        <Form layout="vertical" style={{width: '510px'}}>
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
        </Form>
      </Row>


    </>
  )
}

export default Security;