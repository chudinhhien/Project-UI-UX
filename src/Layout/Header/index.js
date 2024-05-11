import { Layout , theme } from "antd";

const { Header: AntHeader } = Layout;

function Header() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  return (
    <>
      <AntHeader style={{
        padding: 0,
        background: colorBgContainer,
      }}>
      </AntHeader>
    </>
  )
}

export default Header;