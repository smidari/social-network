import React from "react";
import s from "../Dialogs.module.css";
import {MessageType} from "../../../redux/state";

type MessageFCType = {
    messages: Array<MessageType>
}

const Message: React.FC<MessageFCType> = props => (
    <>
        {props.messages.map((item) => <div className={s.message}>{item.message}</div>)}
    </>
);

export default Message;