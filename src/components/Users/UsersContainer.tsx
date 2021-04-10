import React from 'react';
import {connect} from 'react-redux'
import {compose} from 'redux'

import {withAutoRedirect} from '../hoc/withAutoRedirect'
import Users from './Users'
import Fetch from '../Common/Fetch/Fetch'
import {
    follow,
    unfollow,
    requestUsers,
} from '../../redux/users-reducer'
import {
    followingInProcess,
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUsers
} from '../../redux/users-selector'
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalCount: number
    users: Array<UserType>
    followingInProcess:Array<number>


}
type MapDispatchToPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    unfollow: (userId:number)=> void
    follow: (userId:number) => void
}
type PropsType= MapStatePropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p:number) => {
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
                        followingInProcess={this.props.followingInProcess}

                    />
                )
            }

            </>
        )
    }
}
let mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        followingInProcess: followingInProcess(state),
        isFetching: getIsFetching(state)
    }
};
type OwnPropsType ={}

export default compose(
            connect
    (mapStateToProps, {
        follow,
        unfollow,
        getUsers: requestUsers,
    }),
    // withAutoRedirect
)(UsersContainer)