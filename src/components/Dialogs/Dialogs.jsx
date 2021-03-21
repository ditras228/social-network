import  s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";



const Dialogs = (props)=>{


   let dialogsElements = props.state.dialogs.map(d=> <DialogsItem id={d.id} name={d.name} />)
   let messagesElements = props.state.messages.map(d=> <MessageItem id={d.id} name={d.message}/>)


    return(
    <div className={s.main}>
        <div className={s.dialogs}>
            {dialogsElements}


        </div>
            <div className={s.messages}>
                {messagesElements}

        </div>
        <div className={s.send_message}>
            <textarea name="send" id="" ></textarea>
            <button>Send</button>
        </div>

    </div>
    )

};

export default  Dialogs;