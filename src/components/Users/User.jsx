import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

let User = ({user, followingInProcess,follow,unfollow}) =>{
    return (

        <div className={s.item} key={user.id}>
            <div className={s.item_right}>
                <img className={'profile_image_middle'}
                     src={user.photos.small === null ? 'http://placehold.it/80x80' : user.photos.small} alt=""/>
                <NavLink to={'profile/' + user.id} className={s.name}>{user.name}</NavLink>
            </div>
            {user.followed
                ? <button disabled={followingInProcess.some(id=> id===user.id)} className={s.followed} onClick={() => {
                    unfollow(user.id);

                }}>Unfollow</button>
                : <button disabled={followingInProcess.some(id=> id===user.id)} className={s.followed} onClick={() => {
                    follow(user.id);
                }}>Follow</button>
            }
        </div>
    )
}
export  default  User;