import { Layout } from 'antd';
import Header from '../Header';
import Sider from "../Sider";
// import Footer from "../Footer"
import MainContent from "../MainContent";
import { useState } from 'react';

function LayoutDefault() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsed={collapsed} />
        <Layout>
          <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
          <MainContent />
          {/* <Footer /> */}
        </Layout>
      </Layout>
    </>
  )
}

export default LayoutDefault;