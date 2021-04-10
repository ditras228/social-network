import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import {ProfileType} from "../../types/types";
type PropsType ={
    profilePage: ProfileType
    savePhoto: (file: File)=> void
    isOwner: boolean
    saveProfile: (profile: PropsType)=> Promise<any>
}
const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo profilePage={props.profilePage}
                         savePhoto = {props.savePhoto}
                         isOwner={props.isOwner}
                         saveProfile={props.saveProfile}/>
        </div>

    )

}

export default Profile;