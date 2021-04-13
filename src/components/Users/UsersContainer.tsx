import React from 'react'
import {useSelector} from 'react-redux'
import {Users} from './Users'
import Fetch from '../Common/Fetch/Fetch'
import {getIsFetching} from '../../redux/users-selector'

export const UsersContainer: React.FC = () => {
    const isFetching = useSelector(getIsFetching)
    return (
        <> {
            isFetching ? <Fetch/> : null}
                <Users/>
        </>
    )
}