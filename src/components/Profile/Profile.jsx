import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profilePage={props.profilePage}/>
        </div>

    )

}

export default Profile;