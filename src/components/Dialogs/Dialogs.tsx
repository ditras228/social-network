import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import MessageItem from './MessageItem/MessageItem'
import React from 'react'
import {useFormik} from 'formik'
import {InitialStateType} from '../../redux/dialogs-reducer'

const Dialogs: React.FC<PropsType> = ({dialogsPage,sendMessage}) => {
    let state= dialogsPage
    let dialogsElements = state.dialogs.map(d => <DialogsItem id={d.id} key={d.id} name={d.name}/>)
    let messagesElements = state.messages.map(m => <MessageItem id={m.id} key={m.id} name={m.text}/>)

    return (
        <div className={s.main}>
            <div className={s.content}>
                <div className={s.dialogs}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <AddMessageForm dialogsPage={dialogsPage} sendMessage={sendMessage}/>
            </div>
        </div>
    )

};
export const AddMessageForm: React.FC<PropsType> = ({sendMessage}) => {
    const  formik = useFormik({
        initialValues:{
            newMessageBody: ''
        },
        onSubmit: values => {
            sendMessage(values.newMessageBody)
        }
    })
    return (
        <form className={s.send_message} onSubmit={formik.handleSubmit}>
            <textarea name='newMessageBody' className={s.textarea} onChange={formik.handleChange}
                      value={formik.values.newMessageBody}/>
            <button type={'submit'} className={s.button}>Send</button>
        </form>
    )
}

export default Dialogs;

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string)=> void
}