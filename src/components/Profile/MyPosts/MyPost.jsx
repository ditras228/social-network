import s from './MyPost.module.css';
import Post from './Post/Post';
import {BiRepost} from 'react-icons/bi';
const MyPost = (props) => {


    let PostsElements= props.posts.map((post)=>{
        return  <Post name= {post.name} comment={post.comment}/>
    })
    return (

        <div className={s.content}>
            <div className={s.title}><BiRepost/> 21 posts</div>
            <textarea className={s.textarea} name="" id="" placeholder="Your message..."></textarea>
            <button className={s.button}>Post</button>
            {PostsElements}
        </div>

    )

};

export default MyPost;