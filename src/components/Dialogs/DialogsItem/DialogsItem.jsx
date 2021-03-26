
import s from './DialogsItem.module.css';


   const dialogsElements = (props)=> {
      return <div className={s.item}>
         <img className={s.photo} src="https://placehold.it/80x80" alt=""/>
         <div className={s.name}>{props.name}</div>
      </div>
   }


export default  dialogsElements;