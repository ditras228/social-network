import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import React from 'react';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogsItem id={d.id} key={d.id} name={d.name}/>)
    let messagesElements = props.state.messages.map(m => <MessageItem id={m.id} key={m.id} name={m.text}/>)
    let messageText = React.createRef();
    let onMessageSend = () => {
        props.messageSend();
    }
    let onUpdateMessageText = () => {
        props.updateMessageText(messageText.current.value);
    }
    return (
        <div className={s.main}>
            <div className={s.content}>
                <div className={s.dialogs}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <div className={s.send_message}>
                    <textarea className={s.textarea} ref={messageText} onChange={onUpdateMessageText} value={props.newMessageText}/>
                    <button className={s.button} onClick={onMessageSend}>Send</button>
                </div>
            </div>
        </div>
    )

};

export default Dialogs;