import React from "react";

import {Link} from "react-router-dom";
import SideDrawer from "../SideDrawers/SideDrawer";
import NavLinks from "../NavLinks/NavLinks";
import MainHeader from "../MainHeader/MainHeader";
import './MainNavigation.css'

const MainNavigation = () => {
    return (
        <React.Fragment>
            <SideDrawer>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks/>
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn">
                    <span/>
                    <span/>
                    <span/>
                </button>
                <h2 className="main-navigation__title">
                    <Link to="/">
                        My App
                    </Link>
                </h2>
                <nav className="main-navigation__header-nav">
                    <NavLinks/>
                </nav>
            </MainHeader>
        </React.Fragment>
    )
};

export default MainNavigation
