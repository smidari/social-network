import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props: any) => (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem dialogs={props.dialogs}/>
        </div>
        <div className={s.messages}>
            <Message messages={props.messages}/>
        </div>
    </div>
);

export default Dialogs;