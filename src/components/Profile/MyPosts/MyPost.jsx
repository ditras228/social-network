import s from './MyPost.module.css';
import Post from './Post/Post';
import {BiRepost} from 'react-icons/bi';
import React from 'react';

const MyPost = (props) => {
    let PostsElements = props.profilePage.posts.map((post) => {
        return <Post key={post.id} name={post.name} comment={post.text}/>
    })
    let postText = React.createRef();
    let onAddPost = () => {

        props.addPost();

    }
    let onUpdatePostText = () => {
        let text = postText.current.value;

        props.updatePostText(text);
    }
    return (


        <div className={s.content}>
            <div className={s.title}><BiRepost/> 21 posts</div>
            <textarea ref={postText} value={props.newPostText} onChange={onUpdatePostText}
                      className={s.textarea} name="" id="" placeholder="What's new?"/>
            <button className={s.button} onClick={onAddPost}>Post</button>
            {PostsElements}
        </div>

    )

};

export default MyPost;