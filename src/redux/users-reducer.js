import {usersAPI} from "../api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalCount: 14,
    currentPage: 1,
    isFetching: true,
    followingInProcess: []
}
const usersReducer = (state = initialState, action) => {
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
export default usersReducer;
export const followSuccess = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setCurrentPage = (newCurrentPage) => ({type: SET_CURRENT_PAGE, newCurrentPage: newCurrentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProcess = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId: userId
});


export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(page, pageSize)
            .then(data => {
                    dispatch(setUsers(data.items));
                    dispatch(setTotalUsersCount(data.totalCount));
                    dispatch(setCurrentPage(page));
                    dispatch(toggleIsFetching(false));
                }
            );
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProcess(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                    if (response.data.resultCode === 0)
                        dispatch(followSuccess(userId));
                    dispatch(toggleIsFollowingProcess(false, userId));
                }
            )
    }

}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProcess(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                    if (response.data.resultCode === 0)
                        dispatch(unfollowSuccess(userId));
                    dispatch(toggleIsFollowingProcess(false, userId));
                }
            )
    }

}