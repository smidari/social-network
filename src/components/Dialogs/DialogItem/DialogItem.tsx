import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


type TypeObject = {
    id: number
    name: string
}
type PropsType = {
    dialogs: Array<TypeObject>
}
const DialogItem = (props: PropsType) => (
    <>
        {props.dialogs.map((item, index) =>
            <div className={s.dialog}>
                <NavLink to={`/dialogs/${item.id}`}>{item.name}</NavLink>
            </div>
        )}
    </>
);

export default DialogItem;