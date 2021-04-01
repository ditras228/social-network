import React from 'react';
import s from './Users.module.css'
import {NavLink} from 'react-router-dom';
let Users = (props) => {debugger
    //let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 5; i++) {
        pages.push(i)
    }
    ;
    return <div className={s.main}>{
        <div className={s.content}>
            <div className={s.pages}>
                {pages.map(p => {
                        return <div onClick={() => props.onPageChanged(p)}
                                    className={props.currentPage === p && s.selectedPage}>{p}</div>
                    }
                )}
            </div>

            <div className={s.title}>Users:</div>
            {
                props.users.map(u => <div className={s.item} key={u.id}>
                        <div className={s.item_right}>
                            <img className={s.photo}
                                 src={u.photos.small === null ? 'https://placehold.it/80x80' : u.photos.small} alt=""/>
                            <NavLink to={'profile/' + u.id} className={s.name}>{u.name}</NavLink>
                        </div>
                        {u.followed
                            ? <button disabled={props.followingInProcess.some(id=> id===u.id)} className={s.followed} onClick={() => {
                                props.unfollow(u.id);

                            }}>UnFollow</button>
                            : <button disabled={props.followingInProcess.some(id=> id===u.id)} className={s.followed} onClick={() => {
                                props.follow(u.id);
                            }}>Follow</button>
                        }
                    </div>
                )
            }</div>

    }
    </div>

}

export default Users;