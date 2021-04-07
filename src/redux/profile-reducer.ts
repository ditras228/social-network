import {authAPI, profileAPI, usersAPI} from "../api";
import {PostType, ProfileType, PhotosType} from '../types/types'
import {initialStateAuth} from "./auth-reducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, name: 'dmitry'},
        {id: 2, name: 'vaider'},
        {id: 3, name: 'alex'}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',

    newPostText: ''

}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
                profile: {...state.profile, photos: action.photos} as ProfileType

            }
        }
        default:
            return state;
    }

}

type AddPostCreatorType = {
    type: typeof ADD_POST
    text: string
}
export const addPostCreator = (text: string): AddPostCreatorType => ({type: ADD_POST, text: text});
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile: profile})
type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status: status})
type savePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType):savePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getProfile = (userId: number | null) => {
    return async (dispatch: any) => {
        let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
    }
}
export const getStatus = (status: any) => {
    return async (dispatch: any) => {
        let response = await profileAPI.getStatus(status)
        dispatch(setStatus(response.data));
    }
}
export const updateStatus = (status: any) => {
    return async (dispatch: any) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0)
            dispatch(setStatus(status));
    }
}
export const savePhoto = (photoFile: any) => {
    return async (dispatch: any) => {
        let response = await profileAPI.savePhoto(photoFile)
        if (response.data.resultCode === 0)
            dispatch(savePhotoSuccess(photoFile));
    }
}
export const saveProfile = (profile: any) => {
    return async (dispatch: any) => {
        let response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0)
                dispatch(getProfile(initialStateAuth.userId));
    }
}

export default profileReducer