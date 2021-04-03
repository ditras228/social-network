import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={'profile_image_small'}
                 style={{
                     backgroundImage: 'url("http://placehold.it/50x50")',
                     backgroundPosition: 'center'
                 }}></div>
            <div>
                <div className={s.autor}>{props.name}</div>
                <div className={s.text}>{props.comment}</div>
            </div>
        </div>
    )

};

export default Post;