import s from './MyPost.module.css';
import Post from './Post/Post';
import {BiRepost} from 'react-icons/bi';
import React from 'react';



const MyPost = (props) => {

    let PostsElements = props.posts.map((post) => {
        return <Post name={post.name} comment={post.comment}/>
    })
    let postText= React.createRef();
    let addPost=()=>
    {

        props.dispatch({type: 'ADD-POST'}) ;

    }
    let updatePostText=()=>
    {
        let text= postText.current.value;
        props.dispatch({type: 'UPDATE-POST-TEXT', newText: text});
    }
    return (


        <div className={s.content}>
            <div className={s.title}><BiRepost/> 21 posts</div>
            <textarea ref={postText} value={props.newPostText}  onChange={updatePostText} className={s.textarea} name="" id="" placeholder="What's new?" ></textarea>
            <button className={s.button} onClick={addPost}>Post</button>
            {PostsElements}
        </div>

    )

};

export default MyPost;