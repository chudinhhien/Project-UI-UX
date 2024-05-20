import { Layout, Menu, Grid, Drawer } from "antd";
import { Link } from "react-router-dom";
import { item } from "../../components/MenuItem";
import Logo from "../../components/Logo/Logo";
import './Sider.scss'
const { Sider: AntSider } = Layout;
const { useBreakpoint } = Grid;

function Sider(props) {
    const screen = useBreakpoint();
    return (
        <>
            {screen.sm ? <AntSider width={250} trigger={null} collapsed={props.collapsed}>
                <Logo collapsed={props.collapsed} />
                <Menu mode="inline" theme="dark" defaultSelectedKeys={["1"]}>
                    {item.map((menuItem) => (
                        <Menu.Item key={menuItem.key} icon={menuItem.icon}>
                            <Link to={menuItem.url}>{menuItem.label}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </AntSider> : <Drawer title={<Logo />} open={props.open} placement="left" width={200} closable={false} onClose={props.onClose}><Menu mode="inline" defaultSelectedKeys={["1"]}>
                    {item.map((menuItem) => (
                        <Menu.Item key={menuItem.key} icon={menuItem.icon}>
                            <Link to={menuItem.url} onClick={props.onClose}>{menuItem.label}</Link>
                        </Menu.Item>
                    ))}
                </Menu></Drawer>}
        </>
    );
}

export default Sider;
