import React from "react";
import all_icons from "./../../assets/icon/all_icon";

const Logo = () => {
    return (
        <>
            <img
                src={all_icons.logo}
                alt="KPI Tracker"
                className="logo__img"
            />
            <h1 className="logo__title">KPI Tracker</h1>
        </>
    );
};

export default Logo;
