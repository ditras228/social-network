import s from './ProfileInfo.module.css';
import MyPostContainer from "../MyPosts/MyPostContainer";
import Fetch from "../../Common/Fetch/Fetch";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
const ProfileInfo = (props) => {
    
    let p = props.profilePage.profile;
    if(!p) {

       return (
           <Fetch/>
       )
    }
    else
            return (

            <div className={s.main}>

                <div className={s.content_img}
                     style={{
                         backgroundImage:
                             'url("https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_1280.png")',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         gridRow: '1/2',
                         gridColumn: '1/4'
                     }}>
                </div>


                <div className={s.header}>
                    <img src={p.photos.small===null? 'http://placehold.it/100x100':p.photos.small} alt=""
                         className={'profile_image'}/>
                    <div className={s.title}>
                        <div className={s.name}>{p.fullName}</div>
                        <div className={s.followers}>100 followers</div>
                    </div>
                </div>
                <div className={s.content}>


                    <div className={s.info}>
                        <div className={s.about}>
                            <ProfileStatusWithHooks/>
                        </div>
                        <MyPostContainer/>
                    </div>
                </div>
            </div>
        )
    }


    ;

    export default ProfileInfo;