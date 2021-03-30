import {usersAPI} from "../api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialState={
    posts: [
        {id: 1, name: 'dmitry'},
        {id: 2, name: 'vaider'},
        {id: 3, name: 'alex'}
    ],
    newPostText: ''
}
const profileReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_POST: {
            let newPost = {
                id: 4,
                name: 'test',
                text: state.newPostText,
            };
            return {
                ...state,
                posts: [...state.posts,newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE:{
            return{
                ...state,
                profile: action.profile
            }
        }

        default:
            return state;
    }
}
export default profileReducer;
export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostText= (text) => ({type: UPDATE_NEW_POST_TEXT,newText: text})
export const setUserProfile= (profile) => ({type: SET_USER_PROFILE, profile: profile})

export const getProfile = (userId) => {
    return (dispatch)=> {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
                }
            );
    }
}