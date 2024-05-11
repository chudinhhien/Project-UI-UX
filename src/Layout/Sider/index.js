import { Layout , Menu } from "antd";
import { Link } from 'react-router-dom';
import { item } from "../../components/MenuItem";
const { Sider: AntSider } = Layout;

function Sider() {
  return (
    <>
      <AntSider width={250}>
        <h2 style={{ color: 'white', textAlign: "center" }}>KPI Tracker</h2>
        <Menu mode='inline' theme='dark' defaultSelectedKeys={['1']}>
          { item.map(menuItem => (
            <Menu.Item key={menuItem.key} icon={menuItem.icon}>
              <Link to={menuItem.url}>{menuItem.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </AntSider>
    </>
  )
}

export default Sider;