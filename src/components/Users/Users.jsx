import React from 'react';
import s from './Users.module.css'
import User from "./User";
import Paginator from "../Common/Paginator/Paginator";
let Users = (props) => {
    return <div className={s.main}>{
        <div className={s.content}>
            <h2>Users:</h2>
            <div className={s.users}>
            {
                props.users.map(u =>
                    <User user={u}
                          followingInProcess={props.followingInProcess}
                          follow={  props.follow}
                          unfollow={  props.unfollow}

                    />
                )
            }</div>
        <Paginator currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   totalCount={props.totalCount}
        />
        </div>

    }
    </div>

}

export default Users;