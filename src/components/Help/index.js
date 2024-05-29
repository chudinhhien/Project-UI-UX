import React from 'react';
import { QuestionCircleOutlined, FacebookOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Col, Dropdown, Menu, Row } from 'antd';
import { useDispatch } from "react-redux";
import { helpInfoDashboard, helpSider } from '../../actions/Help';

const Help = ({ startTour }) => {
  const dispatch = useDispatch();
  const menu = (
    <Menu onClick={(e) => handleMenuClick(e)}>
      <Menu.Item key="1" icon={<QuestionCircleOutlined />}>Chức năng chính của trang web?</Menu.Item>
      <Menu.Item key="2" icon={<QuestionCircleOutlined />}>Thông tin trên Dashboard gồm những gì?</Menu.Item>
      <Menu.Item key="3" icon={<QuestionCircleOutlined />}>
        Liên hệ hỗ trợ
        <Row gutter={10}>
          <Col>
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined style={{ fontSize: '20px', color: '#3b5998' }} />
            </a>
          </Col>
          <Col>
            <a href="https://zalo.me/yourzaloid" target="_blank" rel="noopener noreferrer">
              <WhatsAppOutlined style={{ fontSize: '20px', color: '#25D366' }} />
            </a>
          </Col>
        </Row>
      </Menu.Item>
    </Menu>
  );

  const handleMenuClick = (e) => {
    if (e.key === "2") {
      dispatch(helpInfoDashboard());
    } else if (e.key === "1") {
      dispatch(helpSider());
    }
  };

  return (
    <Dropdown overlay={menu} placement="bottomLeft">
      <QuestionCircleOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
    </Dropdown>
  );
};

export default Help;
