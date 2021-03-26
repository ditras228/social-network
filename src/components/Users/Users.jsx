import React from 'react';
import s from './Users.module.css'
import * as axios from "axios";
import {render} from "@testing-library/react";

class Users extends React.Component {
    constructor(props) {

        super(props);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                 this.props.setTotalUsersCount(response.data.totalCount);
                 console.log(response.data);
            }
        );
    }


    render() {
        let pagesCount =  Math.ceil( this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        ;

        return <div className={s.main}>{
            <div className={s.content}>

                {pages.map(p => {
                    return <div onClick={()=>this.props.setCurrentPage(p)}
                                className={this.props.currentPage === p && s.selectedPage}>{p}</div>
                }
                    )}


                    <div className={s.title}>Users:</div>
                {
                    this.props.state.users.map(u => <div className={s.item} key={u.id}>
                    <div className={s.item_right}>
                    <img className={s.photo}
                    src={u.photoLink === undefined ? 'https://placehold.it/80x80' : u.photoLink} alt=""/>
                    <div className={s.name}>{u.name}</div>
                    </div>
                {u.followed
                    ? <button className={s.followed} onClick={() => {
                    this.props.unfollow(u.id)
                }}>UnFollow</button>
                    : <button className={s.followed} onClick={() => {
                    this.props.follow(u.id)
                }}>Follow</button>
                }
                    </div>
                    )
                }</div>

                }
            </div>
            }
            }

    export
    default
    Users;