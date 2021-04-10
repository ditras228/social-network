import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getStatus , updateStatus} from "../../../redux/profile-reducer";
import {GrStatusInfo} from "react-icons/gr";
import {AppStateType} from "../../../redux/redux-store";
import {ProfileType} from "../../../types/types";
type PropsType = {
    profilePage: any
}
    const ProfileStatusWithHooks: React.ComponentType<PropsType> = ({profilePage}) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(profilePage.status)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatus(status)
    }
    const onStatusChange = (e:any) => {
        setStatus(e.currentTarget.value)
    }
    useEffect(() => {
        setStatus(profilePage.status)
    }, [profilePage.status])
    return (

        <form>{

            editMode
                ? <div>
                    <input onBlur={deactivateEditMode} onChange={onStatusChange}
                           autoFocus={true}
                           type="text"/>
                </div>
                : <div onClick={activateEditMode}>
                    <GrStatusInfo/> {status}
                </div>
        } </form>
    )
}
let mapStateToProps = (state: AppStateType) => {
    return {
        profilePage: state.profilePage,

    }
}
// @ts-ignore
export default connect<React.ComponentType<PropsType>>(mapStateToProps, {getStatus, updateStatus})(ProfileStatusWithHooks);