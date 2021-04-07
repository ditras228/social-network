import React from 'react'
import s from './Users.module.css'
import User from './User'
import Paginator from '../Common/Paginator/Paginator'
import {UserType} from '../../types/types'

type PropsType={
    totalCount: number
    currentPage: number
    onPageChanged: (pageNumber: number)=> void
    followingInProcess: Array<number>
    follow: (userId:number)=> void
    unfollow: (userId:number)=> void
    users: Array<UserType>
    pageSize:number
    isFetching: boolean
}
const Users: React.FC<PropsType> = ({currentPage, onPageChanged, totalCount,
                   followingInProcess, follow, unfollow, users}) => {
    return <div className={s.main}>{
        <div className={s.content}>
            <h2>Users:</h2>
            <div className={s.users}>
            {
                users.map(u =>
                    <User user={u}
                          followingInProcess={followingInProcess}
                          follow={follow}
                          unfollow={unfollow}
                    />
                )
            }</div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalCount={totalCount}
        />
        </div>

    }
    </div>

}

export default Users