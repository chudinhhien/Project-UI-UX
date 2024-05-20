import React from 'react';
import {
  UserOutlined,
  DownOutlined,
  PoweroffOutlined,
  QuestionCircleOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, Space, theme } from 'antd';
import { Link } from 'react-router-dom';
import NotificationButton from '../../components/NotificationButton';
import './Header.scss';
import all_imgs from '../../assets/img/all_img';
import Language from '../../components/Language';

const { Header: AntHeader } = Layout;

function Header({ collapsed, toggleCollapsed }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      label: (
        <Link to="/setting">
          <Space>
            <UserOutlined />
            <div>Thông tin cá nhân</div>
          </Space>
        </Link>
      ),
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <a href="/">
          <Space>
            <PoweroffOutlined />
            <div>Đăng xuất</div>
          </Space>
        </a>
      ),
      key: '3',
    },
  ];

  return (
    <AntHeader
      style={{
        paddingRight: '0px',
        paddingLeft: '0px',
        background: colorBgContainer,
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleCollapsed}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
      <div className="actions">
        <Space size="large">
          <div className="actions__help">
            <QuestionCircleOutlined style={{ fontSize: '24px' }} />
          </div>
          <div className="actions__notification">
            <NotificationButton />
          </div>
          <div className="actions__language">
            <img src={all_imgs.england} alt="england" />
          </div>
          <Language />
          <Dropdown menu={{ items }} trigger={['click']}>
            <button
              onClick={(e) => e.preventDefault()}
              className="dropdown-button"
            >
              <Space>
                <Avatar size={40} />
                <div className="info">
                  <div className="info__name">Chu Đình Hiển</div>
                  <div className="info__role">Sinh viên</div>
                </div>
                <DownOutlined />
              </Space>
            </button>
          </Dropdown>
        </Space>
      </div>
    </AntHeader>
  );
}

export default Header;
