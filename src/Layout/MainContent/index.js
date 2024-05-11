import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

function MainContent() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Content style={{
        margin: '24px 16px 0 16px',
        minHeight: 400,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}>
        <Outlet />
      </Content>
    </>
  )
}

export default MainContent;