import React from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { useDispatch } from "react-redux";
import { helpInfoDashboard } from '../../actions/Help';

const Help = ({ startTour }) => {
  const dispatch = useDispatch();
  const menu = (
    <Menu onClick={(e) => handleMenuClick(e)}>
      <Menu.Item key="1">Thông tin trên Dashboard gồm những gì?</Menu.Item>
      <Menu.Item key="2">Câu hỏi thường gặp</Menu.Item>
      <Menu.Item key="3">Liên hệ hỗ trợ</Menu.Item>
    </Menu>
  );

  const handleMenuClick = (e) => {
    if (e.key === "1") {
      dispatch(helpInfoDashboard());
    }
  };

  return (
    <Dropdown overlay={menu} placement="bottomLeft">
      <QuestionCircleOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
    </Dropdown>
  );
};

export default Help;
