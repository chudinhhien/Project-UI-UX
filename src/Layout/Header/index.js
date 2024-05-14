import { Avatar, Input, Layout, theme } from "antd";
import { useSelector } from "react-redux";
import './Header.scss'
import NotificationButton from "../../components/NotificationButton";

const { Header: AntHeader } = Layout;

function Header() {
  const { Search } = Input;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const title = useSelector((state) => state.title);

  return (
    <>
      <AntHeader style={{
        padding: 0,
        background: colorBgContainer,
      }}>
        <div className="header">
          <h1 className="header__title">{title}</h1>
          <div className="header__actions">
            <Search className="header__search" placeholder="input search text" allowClear style={{ width: 200 }} />
            <NotificationButton className="header__notification" />
            <Avatar className="header__avatar" size={50}>User</Avatar>
          </div>
        </div>
      </AntHeader>
    </>
  )
}

export default Header;