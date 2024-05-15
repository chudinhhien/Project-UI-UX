import Logo from "../../components/Logo/Logo";
import all_icons from './../../assets/icon/all_icon';
import all_imgs from './../../assets/img/all_img';

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