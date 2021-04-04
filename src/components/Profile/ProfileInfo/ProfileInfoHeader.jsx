import s from "./ProfileInfo.module.css";
import ProfileInfoHeaderBG from "./ProfileInfoHeaderBG";

let ProfileInfoHeader = ({p, isOwner, onMainFileSelected} ) => {
    return (
        <>
            <ProfileInfoHeaderBG/>
            <div className={s.header}>
                <img src={p.photos.small === null ? 'http://placehold.it/100x100' : p.photos.small} alt=""
                     className={'profile_image'}/>
                {isOwner && <input type="file" onChange={onMainFileSelected}/>}
                <div>
                    <div className={s.name}>{p.fullName}</div>
                    <div>100 followers</div>
                </div>
            </div>
        </>
    )
}
export default ProfileInfoHeader;