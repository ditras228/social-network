import {actions} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import React from "react";
import {ProfileType} from "../../../types/types";


let mapStateToProps = (state:AppStateType) => {
    return {
        profilePage: state.profilePage
    }
}
let dispatchToProps = (dispatch:any) => {
    return {
        addPost: (text:string) => {
            dispatch(actions.addPostCreator(text));
        },
    }
}
// @ts-ignore
const MyPostContainer = connect(mapStateToProps, dispatchToProps)(MyPost);
export default MyPostContainer;