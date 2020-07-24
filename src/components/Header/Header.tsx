import React from "react";
import h from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../assets/logo.png';


const Header = () => (
    <header className={h.header}>
        <NavLink to='#' className={h.logo}>
            {/*<img src="img/logo.png" alt="image"/>*/}
            <img src={logo} alt="logo"/>
        </NavLink>
    </header>
);

export default Header;


