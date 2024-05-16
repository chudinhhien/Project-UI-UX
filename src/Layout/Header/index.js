import {
  UserOutlined,
  DownOutlined,
  PoweroffOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';
import { Avatar, Dropdown, Layout, Space, theme } from 'antd';
import { Link } from 'react-router-dom'; 
import NotificationButton from '../../components/NotificationButton'
import './Header.scss';
import all_imgs from '../../assets/img/all_img';
import Language from '../../components/Language';
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
        <a href='/'>
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
    <AntHeader style={{
      padding: 0,
      background: colorBgContainer,
      height: "70px"
    }}>
      <div className="actions" style={{ height: "100%", display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '31px' }}>
        <Space size="large">
          <div className="actions__help" style={{display: 'flex',alignItems:'center'}}>
            <QuestionCircleOutlined style={{fontSize: "30px",marginTop: "5px"}}/>
          </div>
          <div className="actions__notification">
            <NotificationButton />
          </div>
          <div className="actions__language" style={{paddingTop: '17px',marginRight: '-13px'}}>
              <img src={all_imgs.england} alt='england'/>
          </div>
          <Language />
          <Dropdown menu={{items}} trigger={['click']}>
            <button onClick={(e) => e.preventDefault()}>
              <Space>
                <Avatar size={50}/>
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
