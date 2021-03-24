import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import React from 'react';
import {messageSendCreactor, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let dialogsElements = props.dialogs.dialogs.map(d => <DialogsItem id={d.id} name={d.name}/>)
    let messagesElements = props.dialogs.messages.map(d => <MessageItem id={d.id} name={d.text}/>)
    let messageText = React.createRef();
    let onMessageSend=()=>{
        props.messageSend();
    }
    let onUpdateMessageText=()=>{
        props.updateMessageText(messageText.current.value);
    }
    return (
        <div className={s.main}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.send_message}>
                <textarea ref={messageText} onChange={onUpdateMessageText}  value={props.dialogs.newMessageText}/>
                <button onClick={onMessageSend}>Send</button>
            </div>

        </div>
    )

};

export default Dialogs;