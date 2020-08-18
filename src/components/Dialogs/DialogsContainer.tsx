import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state:any) => {
    return{
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch:any) => {
    return{
        sendMessage: () => {dispatch(sendMessageCreator())},
        updateNewMessageBody: (body:string) => {dispatch(updateNewMessageBodyCreator(body))}
    }
};

// @ts-ignore
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;