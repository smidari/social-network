import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagesPageType} from "../../redux/store";

type DialogsType = {
    dialogsPage: MessagesPageType
    updateNewMessageBody: any
    sendMessage: any
}

const Dialogs: React.FC<DialogsType> = props => {
    let onSendMessageClick = () => props.sendMessage();
    debugger;
    let onSendMessageChange = (e: any) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    };

    return (
        <div className={s.dia1logs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogs={props.dialogsPage.dialogs}/>
            </div>
            <div className={s.messages}>
                <div><Message messages={props.dialogsPage.messages}/></div>
                <div>
                    <div>
                    <textarea
                        value={props.dialogsPage.newMessageBody}
                        placeholder={'Enter your message'}
                        onChange={onSendMessageChange}
                    >
                </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;