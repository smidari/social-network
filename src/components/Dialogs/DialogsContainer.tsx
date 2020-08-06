import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();
                let onSendMessageClick = () => store.dispatch(sendMessageCreator());
                let onSendMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                };
                return (<Dialogs
                    dialogsPage={state.dialogsPage}
                    updateNewMessageBody={onSendMessageChange}
                    sendMessage={onSendMessageClick}/>)
            }
            }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;