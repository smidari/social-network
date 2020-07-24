import React from "react";
import n from './MyNavbar.module.css'
import {NavLink} from "react-router-dom";

const MyNavbar = () => (
    <>
        <nav className={n.nav} >
            <div className={n.item}>
                <NavLink to='/profile' activeClassName={n.active} >Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/dialogs' activeClassName={n.active} >Messages</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/news' activeClassName={n.active} >News</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/music' activeClassName={n.active} >Music</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/settings' activeClassName={n.active} >Settings</NavLink>
            </div>
        </nav>
    </>
);

export default MyNavbar;


