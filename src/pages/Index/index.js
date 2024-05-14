import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import HeroIndex from "../../components/HeroIndex/HeroIndex";
import all_icons from "../../assets/icon/all_icon";
import all_imgs from "./../../assets/img/all_img";

function Index() {
    return (
        <div className="index">
            <div className="top-bar">
                <Link to="/" className="logo">
                    <Logo />
                </Link>
                <div className="top-act">
                    <Link to="/signup">
                        <button className="btn">Sign Up</button>
                    </Link>
                    <Link to="/signin">
                        <button className="btn">Sign In</button>
                    </Link>
                </div>
            </div>
            <HeroIndex />
            <div className="index-feature">
                <div className="index-feature-group">
                    <div className="index-feature-img">
                        <img src={all_icons.index_icon_1} alt="" />
                    </div>
                    <div>
                        <h3 className="index-feature-title">KPI Tracking</h3>
                        <p className="index-feature-desc">Tracking process</p>
                    </div>
                </div>
                <div className="index-feature-group">
                    <div className="index-feature-img">
                        <img src={all_icons.index_icon_2} alt="" />
                    </div>
                    <div>
                        <h3 className="index-feature-title">Manage KPI</h3>
                        <p className="index-feature-desc">
                            Create, Edit and Delete
                        </p>
                    </div>
                </div>
                <div className="index-feature-group">
                    <div className="index-feature-img">
                        <img src={all_icons.index_icon_3} alt="" />
                    </div>
                    <div>
                        <h3 className="index-feature-title">View Dashboard</h3>
                        <p className="index-feature-desc">Schedule and more</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
