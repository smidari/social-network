import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem";

const arrName = ['Dima', 'Masha', 'Sasha', 'Dasha'];

const Dialogs = (props: any) => (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem arrName={arrName}/>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>Hello</div>
            <div className={s.message}>yei</div>
        </div>
    </div>
);

export default Dialogs;