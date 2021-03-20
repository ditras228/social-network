import  s from './../Dialogs.module.css';




const MessageItem = (props) =>{
    return <div className={props.dialogs_item}>{props.name}</div>
}
export default  MessageItem;