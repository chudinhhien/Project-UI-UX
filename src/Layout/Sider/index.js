import { Layout , Menu } from "antd";
import { Link } from 'react-router-dom';
import { items } from "../../components/MenuItem";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions/title";
const { Sider: AntSider } = Layout;

function Sider() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const selectedItem = items.find(item => item.key === e.key);
    if (selectedItem) {
      dispatch(setTitle(selectedItem.label));
    }
  };
  return (
    <>
      <AntSider width={250}>
        <h2 style={{ color: 'white', textAlign: "center" }}>KPI Tracker</h2>
        <Menu mode='inline' theme='dark' defaultSelectedKeys={['1']}>
          { items.map(menuItem => (
            <Menu.Item key={menuItem.key} icon={menuItem.icon} onClick={handleClick}>
              <Link to={menuItem.url}>{menuItem.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </AntSider>
    </>
  )
}

export default Sider;