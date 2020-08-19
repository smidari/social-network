import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {MessagesPageType} from "../../types/entities";

type mapStatePropsType = {
    dialogsPage: MessagesPageType
};
type mapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}
export  type DialogsPropsType = mapStatePropsType & mapDispatchToPropsType;
let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
};

const connector = connect(mapStateToProps, mapDispatchToProps);
const DialogsContainer = connector(Dialogs);

export default DialogsContainer;