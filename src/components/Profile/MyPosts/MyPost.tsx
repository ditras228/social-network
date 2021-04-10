import s from './MyPost.module.css';
import Post from './Post/Post';
import {BiRepost} from 'react-icons/bi';
import React from 'react';
import {useFormik} from "formik";
import {PostType, ProfileType} from "../../../types/types";
type PropsType={
    profilePage: ProfileType
    addPost: any
    profile: any
}
const MyPost: React.FC<PropsType> = (props) => {
    let PostsElements = props.profilePage.posts.map((post: PostType) => {
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
const AddPostForm=(props: any)=>{
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
        <form className={s.form} onSubmit={formik.handleSubmit}>
            <textarea  name='newPostBody' value={formik.values.newPostBody} onChange={formik.handleChange}
                      className={s.textarea} placeholder="What's new?"/>
            <button className={s.button} type={'submit'}>Send</button>
        </form>
    )
}
// const MyPostMemorized = React.memo(MyPost)
export default MyPost;