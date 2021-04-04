import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getStatus, setStatus, updateStatus} from "../../../redux/profile-reducer";
import {GrStatusInfo} from "react-icons/gr";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.profilePage.status)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    useEffect(() => {
        setStatus(props.profilePage.status)
    }, [props.profilePage.status])
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
let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,

    }
}
export default connect(mapStateToProps, {getStatus, setStatus, updateStatus})(ProfileStatusWithHooks);