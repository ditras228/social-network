import s from './Post.module.css';
const Post = (props)=>{
    return(
     <div className={s.item}>
       <div className={s.image}
       style={{
         backgroundImage: 'url("https://sun9-60.userapi.com/s/v1/ig2/LUI1ps8Bx1E6cFBn9Vd5xOsmXYSy37xIK4vJcbHrUc6ErOvi84HWPIznhVYO5LLL10MeKQIiJTzaLAqEuzacg-Lx.jpg?size=50x0&quality=96&crop=0,361,1286,1286&ava=1")',
         backgroundPosition: 'center'
       }}></div>
       <div>
       <div className={s.autor}>{props.name}</div>
       <div className={s.text}>{props.comment}</div>
     </div>
     </div>
      )

};

export default  Post;