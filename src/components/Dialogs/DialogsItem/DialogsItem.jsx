import  s from './../Dialogs.module.css';



   const dialogsElements = (props)=> {
      return <div className={props.dialogs_item}>{props.name}</div>
   }


export default  dialogsElements;