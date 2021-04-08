import {UserType} from '../types/types'
import {AppStateType, BaseThunkType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/users-api";

export type InitialStateType = typeof initialState

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10 as number,
    totalCount: 14 as number,
    currentPage: 1 as number,
    isFetching: true as boolean,
    followingInProcess: [] as Array<number>
}
const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return ({...u, followed: true});
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
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
        case 'SET_USERS':
            return {
                ...state, users: [...action.users]

            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.newCurrentPage,


            }
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalCount: action.totalCount

            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state, isFetching: action.isFetching

            }
        case 'TOGGLE_IS_FOLLOWING_IN_PROGRESS':
            return {
                ...state, followingInProcess: action.isFetching
                    ? [...state.followingInProcess, action.userId]
                    : state.followingInProcess.filter(id => id !== action.userId)

            }
        default:
            return state;
    }
}
export type ActionsTypes = InferActionsTypes<typeof actions>
export const actions = {
    followSuccess: (userId: number) => ({type: 'FOLLOW', userId: userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW', userId: userId} as const),
    setUsers:(users: Array<UserType>) => ({type: 'SET_USERS', users: users} as const),
    setCurrentPage: (newCurrentPage: number) =>
        ({type: 'SET_CURRENT_PAGE', newCurrentPage: newCurrentPage} as const),
    setTotalUsersCount:(totalCount: number) => ({
        type: 'SET_TOTAL_USERS_COUNT',
        totalCount: totalCount
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
    toggleIsFollowingProcess: (isFetching: boolean, userId: number) => ({
        type: 'TOGGLE_IS_FOLLOWING_IN_PROGRESS',
        isFetching,
        userId: userId
    } as const)
}

type ThunkType = BaseThunkType<ActionsTypes>

export const requestUsers = (page: number, pageSize: number): ThunkType=> {
    return async (dispatch: Dispatch<ActionsTypes>, getState: () => AppStateType) => {
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
        dispatch(actions.setCurrentPage(page));
        dispatch(actions.toggleIsFetching(false));
    }
}

const _followUnfollowFlow =
    async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(actions.toggleIsFollowingProcess(true, userId));
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleIsFollowingProcess(false, userId));
}
export const follow = (userId: number): ThunkType => {
    return async (dispatch: any) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.follow(userId), actions.followSuccess)
    }

}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch: any) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow(userId), actions.unfollowSuccess)
    }

}

export default usersReducer;