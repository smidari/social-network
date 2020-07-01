import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    arrName: Array<string>
}
const DialogItem = (props: PropsType) => (
    <>
        {props.arrName.map((item, index) =>
            <div className={s.dialog}>
                <NavLink to={`/dialogs/${index}`}>{item}</NavLink>
            </div>
        )}
    </>
);

export default DialogItem;