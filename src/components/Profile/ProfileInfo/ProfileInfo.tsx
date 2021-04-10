import s from './ProfileInfo.module.css';
import MyPostContainer from "../MyPosts/MyPostContainer";
import Fetch from "../../Common/Fetch/Fetch";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileInfoHeader from "./ProfileInfoHeader";
import ProfileData from "./ProileData";
import {useState} from "react";

const ProfileInfo = (props:any) => {
    let p = props.profilePage.profile;
    const onMainFileSelected = (e:any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    let [editMode, setEditMode]=useState(false);
        let onSubmit =(formData: any)=>{
        props.saveProfile(formData);
    }
    if (!p) {
        return (<Fetch/>)
    } else {
        return (
            <div className={s.main}>
                <ProfileInfoHeader p={p} isOwner={props.isOwner} onMainFileSelected={onMainFileSelected}/>
                <div className={s.content}>
                        <ProfileStatusWithHooks profilePage={props.profilePage}/>
                        <ProfileData lookingForAJob={p.lookingForAJob}
                                     lookingForAJobDescription={p.lookingForAJobDescription}
                                     fullName={p.fullName}
                                     contacts={p.contacts}
                                     goToEditMode={()=>{setEditMode(!editMode)}}
                                     editMode={editMode}
                                     onSubmit={onSubmit}
                        />
                        <MyPostContainer profile={props.profile} />
                </div>
            </div>
        )
    }
}
export default ProfileInfo;