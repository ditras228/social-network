import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import React from 'react';
import {Redirect} from 'react-router-dom'
import {useFormik} from "formik";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogsItem id={d.id} key={d.id} name={d.name}/>)
    let messagesElements = props.state.messages.map(m => <MessageItem id={m.id} key={m.id} name={m.text}/>)

    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.main}>
            <div className={s.content}>
                <div className={s.dialogs}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <AddMesageForm props={props}/>
            </div>
        </div>
    )

};
export const AddMesageForm = (props) => {
    const  formik = useFormik({
        initialValues:{
            newMessageBody: ''
        },
        onSubmit: values => {
            props.props.messageSend(values.newMessageBody);
        }
    })
    return (
        <form className={s.send_message} onSubmit={formik.handleSubmit}>
            <textarea name='newMessageBody' className={s.textarea} onChange={formik.handleChange}
                      value={formik.values.newMessageBody}/>
            <button type={"submit"} className={s.button}>Send</button>
        </form>
    )
}
export default Dialogs;