import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProcess, requestUsers,

}
    from "../../redux/users-reducer";
import React from "react";
import Fetch from "../Common/Fetch/Fetch";
import {withAutoRedirect} from "../hoc/withAutoRedirect";
import {compose} from "redux";
import {
    followingInProcess,
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../redux/users-selector";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p) => {
        this.props.getUsers(p, this.props.pageSize)
    }

    render() {
        return (
            <> {
                this.props.isFetching ? <Fetch/> : (
                    <Users
                        users={this.props.users}
                        totalCount={this.props.totalCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        isFetching={this.props.isFetching}
                        toggleIsFollowingProcess={this.props.toggleIsFollowingProcess}
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        followingInProcess: followingInProcess(state),
        isFetching: getIsFetching(state)
    }
};
export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleIsFollowingProcess,
        getUsers: requestUsers,
        getUsersS: getUsers
    }),
    withAutoRedirect
)(UsersContainer)