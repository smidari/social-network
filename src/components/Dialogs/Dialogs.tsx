import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props: any) => (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog + '' + s.active}><NavLink to='/dialogs/0'>Dima</NavLink></div>
            <div className={s.dialog}><NavLink to='/dialogs/1'>Masha</NavLink></div>
            <div className={s.dialog}><NavLink to='/dialogs/2'>Dasha</NavLink></div>
            <div className={s.dialog}><NavLink to='/dialogs/3'>Valera</NavLink></div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>Hello</div>
            <div className={s.message}>yei</div>
        </div>
    </div>
);

export default Dialogs;