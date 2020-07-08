import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type TypeMessage = {
    id: number
    message: string
}
type PropsType = {
    messages: Array<TypeMessage>
}

const Message = (props: PropsType) => (
    <>
        {props.messages.map((item) =>

                <div className={s.message}>{item.message}</div>

        )}
    </>
)

export default Message;