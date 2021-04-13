import React, {useEffect} from 'react'
import s from './Users.module.css'
import User from './User'
import Paginator from '../Common/Paginator/Paginator'
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFilter,
    getPageSize,
    getTotalCount,
    getUsers,
    isFollowingInProcess
} from "../../redux/users-selector";
import {FilterType, requestUsers} from "../../redux/users-reducer";
import {UsersSearch} from "./UsersSearch";
import { useHistory } from 'react-router-dom';
import * as queryString from "querystring";

export const Users: React.FC= () => {
    const  users= useSelector(getUsers)
    const totalCount= useSelector(getTotalCount)
    const currentPage= useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const followingInProcess=useSelector(isFollowingInProcess)
    const dispatch= useDispatch()
    const filter=useSelector(getFilter)
    const history = useHistory()

    useEffect(()=>{
      const parsed = queryString.parse(history.location.search.substr(1)) as {term: string; page: string; friend:string }
      let actualPage= currentPage
        let actualFilter= filter

        if(!!parsed.page) actualPage= Number(parsed.page)
        if(!!parsed.term) actualFilter= {...actualFilter, term:parsed.term as string}

        switch (parsed.friend){
            case 'null':
                actualFilter={...actualFilter, friend: ''}
                break
            case 'true':
                actualFilter={...actualFilter, friend: 'true'}
                break
            case 'false':
                actualFilter={...actualFilter, friend: 'false'}
                break

        }
      dispatch(requestUsers(actualPage,pageSize, actualFilter))
    }, [])
    useEffect(()=>{
        history.push({
            pathname: '/users',
            search: `?term=${filter.term}&friend=${filter.friend}&currentPage=${currentPage}`
        })
    }, [filter, currentPage])
    const follow= (userId: number) =>  {
        dispatch(follow(userId))
    }
    const unfollow= (userId: number) =>  {
        dispatch(unfollow(userId))
    }

    const  onPageChanged= (p: number) =>{
        dispatch(requestUsers(p, pageSize, {term: '', friend: ''}))
    }
    const  onFilterChanged= (filter: FilterType) =>{
        dispatch(requestUsers(currentPage, pageSize, filter))
    }
    return <div className={s.main}>{
        <div className={s.content}>
            <UsersSearch onFilterChanged={onFilterChanged}/>

            <h2>Users:</h2>
            <div className={s.users}>
            {
                users.map(u =>
                    <User user={u}
                          followingInProcess={  followingInProcess}
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

