import React, {useContext} from "react";

import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/auth-context";
import './NavLinks.css';

const NavLinks = (props: any) => {
    const auth = useContext(AuthContext);

    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/">ALL USERS</NavLink>
            </li>
            <li>
                {auth.isLoggedIn && <NavLink to="/places">ALL PLACES</NavLink>}
            </li>
            <li>
                {auth.isLoggedIn && <NavLink to="/place/new">ADD PLACE</NavLink>}
            </li>
            <li>
                {!auth.isLoggedIn && <NavLink to="/user/auth">AUTHENTICATE</NavLink>}
            </li>
            <li>
                {auth.isLoggedIn && <NavLink to="/logout" onClick={auth.logout}>LOGOUT</NavLink>}
            </li>
        </ul>
    );
};

export default NavLinks
