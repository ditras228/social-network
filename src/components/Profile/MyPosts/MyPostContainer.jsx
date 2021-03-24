import React from 'react';
import {addPostCreator, updateNewPostText} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";


const MyPostContainer = (props) => {
    debugger
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = props.store.getState();
                let addPost = () => {

                    props.dispatch(addPostCreator());

                }
                let updatePostText = (text) => {
                    props.dispatch(updateNewPostText(text));
                }

                return <MyPost
                    posts={state.getState().profilePage.posts}
                    addPost={state.getState().profilePage.addPost}
                    updatePostText={state.getState().profilePage.updatePostText}
                />
            }}
        </StoreContext.Consumer>
    )

}

export default MyPostContainer;