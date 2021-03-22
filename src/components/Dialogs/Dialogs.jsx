import  s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import  React from 'react';


const Dialogs = (props)=>{
   let dialogsElements = props.state.dialogsPage.dialogs.map(d=> <DialogsItem id={d.id} name={d.name} />)
   let messagesElements = props.state.dialogsPage.messages.map(d=> <MessageItem id={d.id} name={d.message}/>)
   let messageText= React.createRef();
    let updateMessageText=()=>{
        let text = messageText.current.value;
        props.dispatch({type: 'UPDATE-MESSAGE-TEXT', newText: text});
    }
    let messagePost=()=>{
        props.dispatch({type: 'MESSAGE-POST'});
    }
    return(
    <div className={s.main}>
        <div className={s.dialogs}>
            {dialogsElements}


        </div>
            <div className={s.messages}>
                {messagesElements}

        </div>
        <div className={s.send_message}>
            <textarea name="send"  ref={messageText} id="" onChange={updateMessageText} value={props.state.dialogsPage.newMessageText}></textarea>
            <button onClick={messagePost}>Send</button>
        </div>

    </div>
    )

};

export default  Dialogs;