import s from './ProfileInfo.module.css';
import MyPost from "../MyPosts/MyPost";
import MyPostContainer from "../MyPosts/MyPostContainer";

const ProfileInfo = (props) => {
    return (
        <div className={s.main}>

        <div className={s.content_img}
                 style={{
                     backgroundImage: 'url("https://st.depositphotos.com/2466367/3371/i/600/depositphotos_33710891-stock-photo-a-high-resolution-colorful-panoramic.jpg")',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     gridRow: '1/2',
                     gridColumn: '1/4'
                 }}>
            </div>


            <div className={s.header}>
                <img src="https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg" alt=""
                     className={s.image}/>
                <div className={s.title}>
                    <div className={s.name}>Dmitry D.</div>
                    <div className={s.followers}>100 followers</div>
                </div>
            </div>
            <div className={s.content}>


                <div className={s.info}>
                    <div className={s.about}>
                        <div className={s.about_title}>About</div>

                        <div className={s.item}>
                            <div className={s.item_title}>Date of Birth:</div>
                            <span></span>
                            <div className={s.item_value}>27.01.2002</div>
                        </div>
                        <div className={s.item}>
                            <div className={s.item_title}>City:</div>
                            <span></span>
                            <div className={s.item_value}>Severovdinsk</div>
                        </div>
                        <div className={s.item}>
                            <div className={s.item_title}>Site:</div>
                            <span></span>
                            <div className={s.item_value}>thestate.ru</div>
                        </div>
                    </div>
                    <MyPostContainer posts={props.posts} dispatch={props.dispatch} />
                </div>
            </div>
        </div>
    )

};

export default ProfileInfo;