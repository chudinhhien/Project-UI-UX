import {
  UserOutlined,
  DownOutlined,
  PoweroffOutlined
} from '@ant-design/icons';
import { Avatar, Dropdown, Layout, Space, theme } from 'antd';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Header.scss';
const { Header: AntHeader } = Layout;

function Header() {
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
        <a href='/login'>
          <Space>
            <PoweroffOutlined />
            <div>Đăng xuất</div>
          </Space>
        </a>

      ),
      key: '3',
    },
  ];

  const dropdownRender = (menu) => (
    <div style={{ marginTop: '20px' }}>{menu}</div>
  );

  return (
    <AntHeader style={{
      padding: 0,
      background: colorBgContainer,
      height: "70px"
    }}>
      <div className="actions" style={{ height: "100%", display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '16px' }}>
        <Space size="large">
          <div className="actions__help">Help</div>
          <div className="actions__notification">Notification</div>
          <div className="actions__language">Language</div>
          <Dropdown menu={{ items }} trigger={['click']} style={{ height: "100%" }} dropdownRender={dropdownRender}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Avatar size={50} />
                <div className="info">
                  <div className="info__name" style={{ height: "20px", marginBottom: '0px', fontSize: '14px', fontWeight: 'bold' }}>Chu Đình Hiển</div>
                  <div className="info__role" style={{ fontSize: '12px' }}>Sinh viên</div>
                </div>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Space>
      </div>
    </AntHeader>
  );
}

export default Header;
