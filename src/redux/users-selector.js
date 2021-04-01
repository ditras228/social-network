export const getTotalCount =(state)=> {
    return state.usersPage.totalCount
}
export const getCurrentPage=(state)=>{
    return state.usersPage.currentPage
}
export const getUsers=(state)=>{
    return state.usersPage.users
}
export const getPageSize = (state)=>{
    return state.usersPage.pageSize
}
export const getIsFetching = (state)=>{
    return state.usersPage.isFetching
}
export const followingInProcess = (state)=>{
    return state.usersPage.followingInProcess
}