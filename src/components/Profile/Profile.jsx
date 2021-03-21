import MyPost from './MyPosts/MyPost';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
        <ProfileInfo posts={props.state.posts} addPost={props.addPost}/>
        </div>

    )

};

export default Profile;