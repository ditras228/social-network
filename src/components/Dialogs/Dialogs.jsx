import  s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";



const Dialogs = (props)=>{


   let dialogsElements = props.dialogs.map(d=> <DialogsItem id={d.id} name={d.name} />)
   let messagesElements = props.messages.map(d=> <MessageItem id={d.id} name={d.message}/>)


    return(
    <div className={s.main}>
        <div className={s.dialogs}>
            {dialogsElements}


        </div>
            <div className={s.messages}>
                {messagesElements}
        </div>

    </div>
    )

};

export default  Dialogs;