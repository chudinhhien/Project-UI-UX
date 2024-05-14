import React from "react";
import { Link } from "react-router-dom";
import all_imgs from "./../../assets/img/all_img";
import all_icons from "../../assets/icon/all_icon";

const Index = () => {
    return (
        <div className="index">
            <div className="top-bar">
                <Link
                    // to="/"
                    className="logo"
                >
                    <Logo />
                </Link>
            </div>

            <div className="top-act">
                <button className="btn btn-1">Sign Up</button>
                <button className="btn btn-2">Sign In</button>
            </div>
            <div className="index__hero">
                <div className="index__hero-left">
                    <h2>
                        <strong>Unlock your potential with KPI Tracker</strong>{" "}
                        - the ultimate tool to achieve success.
                    </h2>
                    <p>
                        Whether you're a driven student seeking to maximize your
                        learning outcomes or a dedicated educator aiming to
                        support your students' growth, the KPI Tracker is your
                        ultimate companion on the path to academic excellence
                    </p>
                    <div className="group-btn">
                        <Link to="/signup">
                            <button className="btn">Sign Up</button>
                        </Link>
                        <Link to="/signin">
                            <button className="btn">Sign In</button>
                        </Link>
                    </div>
                </div>
                <div className="index__hero-right">
                    <img src={all_imgs.index_1} alt="Index Image" />
                </div>
            </div>
            <div className="index-feature">
                <div className="index-feature-group">
                    <img src={all_icons.index_icon_1} alt="" className="index-feature-img" />
                    <div>
                        <h3 className="index-feature-title">KPI Tracking</h3>
                        <p className="index-feature-desc">Tracking process</p>
                    </div>
                </div>
                <div className="index-feature-group">
                    <img src={all_icons.index_icon_1} alt="" className="index-feature-img" />
                    <div>
                        <h3 className="index-feature-title">Manage KPI</h3>
                        <p className="index-feature-desc">Create, Edit and Delete</p>
                    </div>
                </div>
                <div className="index-feature-group">
                    <img src={all_icons.index_icon_1} alt="" className="index-feature-img" />
                    <div>
                        <h3 className="index-feature-title">View Dashboard</h3>
                        <p className="index-feature-desc">Schedule and more</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
