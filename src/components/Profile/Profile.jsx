import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
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