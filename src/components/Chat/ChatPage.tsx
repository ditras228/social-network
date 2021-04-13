import s from  './Chat.module.css'
import {useFormik} from "formik";
import React, {useEffect, useState} from "react";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
export const ChatPage = () => {
    return (
        <Chat/>
    )
}
const Chat = () => {
    return (
        <div className={s.content}>
            <Messages/>
            <SendMessageForm/>
        </div>
    )
}
const Messages = () => {
    const [messages, setMessages]= useState<ChatMessageType[]>([])
    useEffect(  () => {
        ws.addEventListener('message', (e:MessageEvent)=>{
            let newMessages=JSON.parse(e.data)
            setMessages((prevMessages)=> [...prevMessages, ...newMessages])
        })
    }, [messages])
    debugger
    return (
        <div>
            {messages.map((m, index) => <Message key={index} message={m}/>)}
        </div>)
}
const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {
    return <div>
        <img className={'profile_image_small'} src={message.photo}/> <b>{message.userName} </b>
        {message.message}
    </div>
}
const SendMessageForm = () => {
    const formik = useFormik({
        initialValues: {
            newMessageText: ''

        },
        onSubmit: values => {

        }

    })
    return (
        <input type="text"  name={'newMessageText'} value={formik.values.newMessageText} onChange={formik.handleChange}/>
    )
}

type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}