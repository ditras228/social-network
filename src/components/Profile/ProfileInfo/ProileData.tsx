import ProfileDataForm from "./ProfileDataForm";
import s from './ProfileInfo.module.css'
import React from "react";
type PropsType={
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: Array<string>
    goToEditMode: ()=> void
    editMode: boolean
    onSubmit: any
}
const ProfileData: React.FC<PropsType> = ({
                         lookingForAJob,
                         lookingForAJobDescription,
                         fullName,
                         contacts,
                         goToEditMode,
                         editMode,
                         onSubmit
                     }) => {
    if (!editMode)
        return (
            <>

                <button onClick={goToEditMode}>Edit</button>

                <div>
                    <b>lookingForAJob</b>: {lookingForAJob && <span>yes</span> || <span>no</span>}

                </div>
                {
                    lookingForAJob &&
                    <div>
                        <b>lookingForAJobDescription</b>: {lookingForAJobDescription}
                    </div>
                }
                <div>
                    <b>fullName</b>: {fullName}
                </div>
                <b>Contacts:</b>

                <div className={s.contacts}>
                    {
                        Object.keys(contacts).map(key => {
                            // @ts-ignore
                            return <div key={key}>{key}: {contacts[key]}</div>
                        })
                    }
                </div>
            </>
        )
    else {
        return (
            <ProfileDataForm lookingForAJob={lookingForAJob}
                             lookingForAJobDescription={lookingForAJobDescription}
                             fullName={fullName}
                             contacts={contacts}
                             onSubmit={onSubmit}
                             goToEditMode={goToEditMode}

            />
        )
    }

}
export default ProfileData;
