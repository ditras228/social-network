import {usersAPI} from "../api";
import {UserType} from '../types/types'
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';

export type InitialStateType = typeof initialState

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10 as number,
    totalCount: 14 as number,
    currentPage: 1 as number,
    isFetching: true as boolean,
    followingInProcess: [] as Array<number>
}
const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return ({...u, followed: true});
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return ({...u, followed: false});
                        }
                        return u;
                    }
                )

            }
        case SET_USERS:
            return {
                ...state, users: [...action.users]

            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.newCurrentPage,


            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                //totalUsersCount: action.count
                totalCount: action.totalCount

            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching

            }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state, followingInProcess: action.isFetching
                    ? [...state.followingInProcess, action.userId]
                    : state.followingInProcess.filter(id => id !== action.userId)

            }
        default:
            return state;
    }
}
export type ActionsTypes = FollowSuccessActionType | UnfollowSuccessActionType | SetUsersActionType |
    SetCurrentPageActionType |SetTotalUsersCountActionType |ToggleIsFollowingProcessActionType
        |ToggleIsFetchingActionType
type FollowSuccessActionType={
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number):FollowSuccessActionType => ({type: FOLLOW, userId: userId});
type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number):UnfollowSuccessActionType => ({type: UNFOLLOW, userId: userId});
type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>):SetUsersActionType => ({type: SET_USERS, users: users});
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    newCurrentPage: number
}
export const setCurrentPage = (newCurrentPage: number):SetCurrentPageActionType =>
    ({type: SET_CURRENT_PAGE, newCurrentPage: newCurrentPage});
type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}
export const setTotalUsersCount = (totalCount: number):SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalCount});
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean):ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching});
type ToggleIsFollowingProcessActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFetching:any,
    userId: number
}
export const toggleIsFollowingProcess = (isFetching: boolean, userId: number):ToggleIsFollowingProcessActionType => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId: userId
});

export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch<ActionsTypes>, getState: ()=> AppStateType) => {
        let data= await usersAPI.getUsers(page, pageSize)
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(setCurrentPage(page));
        dispatch(toggleIsFetching(false));
    }
}

const followUnfollowFlow = async (dispatch: any, userId:number, apiMethod:any, actionCreator: any) =>{
    dispatch(toggleIsFollowingProcess(true,  userId));
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProcess(false, userId));
}
export const follow = (userId: number) => {
    return async (dispatch: any) => {
        await  followUnfollowFlow(dispatch, userId, usersAPI.follow(userId), followSuccess)
    }

}
export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.unfollow(userId), unfollowSuccess)
    }

}

export default usersReducer;