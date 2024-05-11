import { Layout } from 'antd';
import Header from '../Header';
import Sider from "../Sider";
import Footer from "../Footer"
import MainContent from "../MainContent";

function LayoutDefault() {
  return (
    <>
      <Layout style={{minHeight: '100vh'}}>
        <Sider /> 
        <Layout>
          <Header />
          <MainContent />
          <Footer />
        </Layout>
      </Layout>
    </>
  )
}

export default LayoutDefault;