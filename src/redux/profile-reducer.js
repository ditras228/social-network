import {profileAPI, usersAPI} from "../api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';
let initialState = {
    posts: [
        {id: 1, name: 'dmitry'},
        {id: 2, name: 'vaider'},
        {id: 3, name: 'alex'}
    ],
    newPostText: '',
    status: 'loading'
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                name: 'test',
                text: action.text,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,

            }
        }
        case UPDATE_STATUS: {
            return {
                ...state,
                status: action.status,

            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}

            }
        }
        case SAVE_PROFILE_SUCCESS: {
            return {
                ...state,
                profile: action.profile

            }
        }
        default:
            return state;
    }

}
export default profileReducer;
export const addPostCreator = (text) => ({type: ADD_POST, text: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})
export const setStatus = (status) => ({type: SET_STATUS, status: status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
export const saveProfileSuccess = (profile) => ({type: SAVE_PROFILE_SUCCESS, profile})
export const getProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                    dispatch(setUserProfile(response.data));
                }
            );
    }
}
export const getStatus = (status) => {
    return (dispatch) => {
        profileAPI.getStatus(status)
            .then(response => {
                    dispatch(setStatus(response.data));
                    console.log(response.data)
                }
            );
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                    if (response.data.resultCode === 0)
                        dispatch(setStatus(status));
                }
            );
    }
}
export const savePhoto = (photoFile) => {
    return (dispatch) => {
        profileAPI.savePhoto(photoFile)
            .then(response => {
                    if (response.data.resultCode === 0)
                        dispatch(savePhotoSuccess(photoFile));
                }
            );
    }
}
export const saveProfile = (profile) => {
    return (dispatch) => {
        profileAPI.saveProfile(profile)
            .then(response => {
                    if (response.data.resultCode === 0)
                        dispatch(saveProfileSuccess(profile));
                }
            );
    }
}