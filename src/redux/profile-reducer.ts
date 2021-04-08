import {PostType, ProfileType, PhotosType} from '../types/types'
import {initialState as authInitialState} from "./auth-reducer";
import {profileAPI} from "../api/profile-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

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

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD_POST': {
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
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET_STATUS': {
            return {
                ...state,
                status: action.status,
            }
        }
        case 'SAVE_PHOTO_SUCCESS': {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as unknown as ProfileType
            }
        }
        default:
            return state;
    }
}
export const actions={
     addPostCreator: (text: string)  => ({type: 'ADD_POST', text: text} as const),
     setUserProfile: (profile: ProfileType)  => ({type: 'SET_USER_PROFILE', profile: profile} as const),
     setStatus: (status: string)  => ({type: 'SET_STATUS', status: status} as const),
     savePhotoSuccess: (photos: PhotosType) => ({type: 'SAVE_PHOTO_SUCCESS', photos} as const)
}


export const getProfile = (userId: number | null):ThunkType => {
    return async (dispatch: any) => {
        let data = await profileAPI.getProfile(userId)
        dispatch(actions.setUserProfile(data));
    }
}
export const getStatus = (userId: number):ThunkType => {
    return async (dispatch ) => {
        let data = await profileAPI.getStatus(userId)
        dispatch(actions.setStatus(data));
    }
}
export const updateStatus = (status: string):ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status)
        if (data.data.resultCode === 0)
            dispatch(actions.setStatus(status));
    }
}
export const savePhoto = (photoFile: File):ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.savePhoto(photoFile)
        if (data.resultCode === 0)
            dispatch(actions.savePhotoSuccess(data.data.photos));
    }
}
export const saveProfile = (profile: ProfileType):ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.saveProfile(profile)
        if (data.resultCode === 0)
                dispatch(getProfile(authInitialState.userId));
    }
}

export default profileReducer

export type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>