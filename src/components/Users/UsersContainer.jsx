import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";
let mapStateToProps=(state)=>{
    return{
        state: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
};
let mapDispatchToProps=(dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId)=>{
            dispatch(unFollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))

        },
        setCurrentPage:(p)=>{
            dispatch(setCurrentPageAC(p))

        },
        setTotalUsersCount:(c)=>{
            dispatch(setTotalUsersCountAC(c))

    }
    }
}
const UsersContainer= connect(mapStateToProps,mapDispatchToProps)(Users);
export  default  UsersContainer;