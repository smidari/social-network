import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsType = {
    store: any
}

const DialogsContainer: React.FC<DialogsType> = props => {
    let state = props.store.getState();

    let onSendMessageClick = () => props.store.dispatch(sendMessageCreator());


    let onSendMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    };

    return (
        <Dialogs
            dialogsPage={state.dialogsPage}
            updateNewMessageBody={onSendMessageChange}
            sendMessage={onSendMessageClick}/>
    )
};

export default DialogsContainer;