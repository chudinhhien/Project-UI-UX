import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { item } from "../../components/MenuItem";
import Logo from "../../components/Logo/Logo";
const { Sider: AntSider } = Layout;

function Sider(props) {
    return (
        <>
            <AntSider width={250} trigger={null} collapsed={props.collapsed}>
                <Logo />
                <Menu mode="inline" theme="dark" defaultSelectedKeys={["1"]}>
                    {item.map((menuItem) => (
                        <Menu.Item key={menuItem.key} icon={menuItem.icon}>
                            <Link to={menuItem.url}>{menuItem.label}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </AntSider>
        </>
    );
}

export default Sider;
