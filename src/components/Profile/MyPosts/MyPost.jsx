import s from './MyPost.module.css';
import Post from './Post/Post';
import {BiRepost} from 'react-icons/bi';
import React from 'react';
import {useFormik} from "formik";

const MyPost = (props) => {
    let PostsElements = props.profilePage.posts.map((post) => {
        return <Post key={post.id} name={post.name} comment={post.text}/>
    })
    return (
        <div className={s.content}>
            <div className={s.title}><BiRepost/> 21 posts</div>

            <AddPostForm props={props}/>
            {PostsElements}
        </div>

    )

};
const AddPostForm=(props)=>{
    const formik = useFormik(
        {
            initialValues: {
                newPostBody: ''
                
            },
            onSubmit: values => {
                props.props.addPost(values.newPostBody)
            }
        }
    );

    return(
        <form onSubmit={formik.handleSubmit}>
            <textarea  name='newPostBody' value={formik.values.newPostBody} onChange={formik.handleChange}
                      className={s.textarea} placeholder="What's new?"/>
            <button className={s.button} type={'submit'}>Post</button>
        </form>
    )
}
export default MyPost;