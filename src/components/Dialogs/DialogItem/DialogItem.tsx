import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/state";

type DialogItemType = {
    dialogs: Array<DialogType>
}

const DialogItem:React.FC<DialogItemType> = props => (
    <>
        {props.dialogs.map(item =>
            <div className={s.dialog}>
                <NavLink to={`/dialogs/${item.id}`}>{item.name}</NavLink>
            </div>
        )}
    </>
);

export default DialogItem;