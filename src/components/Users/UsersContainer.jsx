import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProcess, getUsers,

} from "../../redux/users-reducer";
import React from "react";
import Fetch from "../Common/Fetch/Fetch";
import {withAutoRedirect} from "../hoc/withAutoRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (p) => {
        this.props.getUsers(p,this.props.pageSize)
    }

    render() {
        return (
            <> {
                this.props.state.isFetching?<Fetch/>:(
                    <Users
                        totalCount={this.props.totalCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        state={this.props.state}
                        isFetching={this.props.state.isFetching}
                        toggleIsFollowingProcess ={this.props.toggleIsFollowingProcess}
                        followingInProcess={this.props.followingInProcess}

                    />
                )
            }

            </>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        state: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        followingInProcess: state.usersPage.toggleIsFollowingProcess

    }
};
export default compose(
    connect(mapStateToProps, {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching,toggleIsFollowingProcess, getUsers}),
    withAutoRedirect
)(UsersContainer)