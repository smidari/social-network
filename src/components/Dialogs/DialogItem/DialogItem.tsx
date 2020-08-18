import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../types/entities";

type DialogItemType = {
    dialogs: Array<DialogType>
}

const DialogItem:React.FC<DialogItemType> = props => (
    <>
        {props.dialogs.map(item =>
            <div key={item.id} className={s.dialog}>
                <NavLink to={`/dialogs/${item.id}`}>{item.name}</NavLink>
            </div>
        )}
    </>
);

export default DialogItem;