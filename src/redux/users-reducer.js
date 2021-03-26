const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount:14,
    currentPage: 1
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
                pageSize: 5

            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count

            }
        default:
            return state;
    }


}
export default usersReducer;
export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});
export const setCurrentPageAC = (newCurrentPage) => ({type: SET_CURRENT_PAGE, newCurrentPage: newCurrentPage});
export const setTotalUsersCountAC = (count) => ({type: SET_TOTAL_USERS_COUNT, count: count});