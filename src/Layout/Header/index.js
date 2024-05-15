import all_icons from './../../assets/icon/all_icon';
import all_imgs from './../../assets/img/all_img';

function Header() {
    return (
        <header className="header">
            <div className="header-act">
                <div className="header-act-notify">
                  <img src={all_icons.bell}></img>
                </div>
                <div className="header-act-langue">
                  <p>English</p>
                </div>
                <div className="header-act-user">
                  <img src={all_imgs.user_avt} className="header-act-user-avt"></img>
                  <div className="header-act-user-info">
                    <p className="header-act-user-name">Chu Đình Hiển</p>
                    <p className="header-act-user-role">Sinh viên</p>
                  </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
