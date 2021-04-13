import s from './Post.module.css';

const Post: React.FC<PropsType>= ({name, comment}) => {
    return (
        <div className={s.item}>
            <div className={'profile_image_small'}
                    style={{
                        backgroundImage: 'url("http://placehold.it/50x50")',
                        backgroundPosition: 'center'
                    }}/>
            <div>
                <div className={s.autor}>{name}</div>
                <div className={s.text}>{comment}</div>
            </div>
        </div>
    )

};

export default Post;

type PropsType={
    name: string
    comment: string
}