import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagesPageType} from "../../redux/state";

type DialogsType = {
    messagesPage: MessagesPageType
}
const Dialogs:React.FC<DialogsType> = props => (
    <div className={s.dia1logs}>
        <div className={s.dialogsItems}>
            <DialogItem dialogs={props.messagesPage.dialogs}/>
        </div>
        <div className={s.messages}>
            <Message messages={props.messagesPage.messages}/>
        </div>
    </div>
);

export default Dialogs;