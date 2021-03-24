
import React from 'react';
import {messageSendCreactor, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let updateMessageText = (text) => {
        props.dispatch(updateNewMessageTextCreator(text));
    }
    let messageSend = () => {
        props.dispatch(messageSendCreactor());
    }
    return (
        <Dialogs dialogs={props.state.dialogsPage} updateMessageText={updateMessageText} messageSend={messageSend}/>
    )

}

export default DialogsContainer;