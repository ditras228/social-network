import {AppStateType} from './redux-store'

export const getTotalCount =(state: AppStateType)=> {
    return state.usersPage.totalCount
}
export const getCurrentPage=(state: AppStateType)=>{
    return state.usersPage.currentPage
}
export const getUsers=(state: AppStateType)=>{
    return state.usersPage.users
}
export const getPageSize = (state: AppStateType)=>{
    return state.usersPage.pageSize
}
export const getIsFetching = (state: AppStateType)=>{
    return state.usersPage.isFetching
}
export const isFollowingInProcess = (state: AppStateType)=>{
    return state.usersPage.followingInProcess
}
export const getFilter = (state: AppStateType)=>{
    return state.usersPage.filter
}