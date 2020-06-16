import React from "react";

import {Link} from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";
import MainHeader from "../MainHeader/MainHeader";
import './MainNavigation.css'

const MainNavigation = () => {
    return (
        <MainHeader>
            <div className="main-navigation__menu-btn">
                <span/>
                <span/>
                <span/>
            </div>
            <div className="main-navigation__title">
                <Link to="/">
                    My App
                </Link>
            </div>
            <NavLinks/>
        </MainHeader>
    )
};

export default MainNavigation
