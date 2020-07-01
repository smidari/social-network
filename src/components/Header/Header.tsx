import React from "react";
import h from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = () => (
    <header className={h.header}>
        <NavLink to='#' className={h.logo}>
            <img src="img/logo.png" alt="image"/>
        </NavLink>
    </header>
);

export default Header;


