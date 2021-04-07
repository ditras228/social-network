import ProfileDataForm from "./ProfileDataForm";
import s from './ProfileInfo.module.css'
const ProfileData = ({lookingForAJob, lookingForAJobDescription, fullName, contacts, goToEditMode,editMode,onSubmit}) => {
  if(editMode===false)
    return (
        <>

            <button onClick={goToEditMode}>Edit</button>

            <div>
                <b>lookingForAJob</b>: {lookingForAJob===true && <span>yes</span>  || <span>no</span>}

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
                Object.keys(contacts).map(key=>{
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

            />
        )
  }

}
export default ProfileData;
