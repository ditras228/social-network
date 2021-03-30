import s from './Header.module.css';
import {RiQrCodeFill} from 'react-icons/ri';

const Header = (props) => {
        let u = props.data.data;
    return (
        <header className={s.header}>

            <div className={s.logo}>
                <div className={s.icon}>
                    <RiQrCodeFill/></div>Enigma <div className={s.region}>RU</div>
            </div>
            {

                u.isAuth?<div className={s.login}>{u.login}</div>
            :<>LogIn</>
            }
        </header>
    )

};

export default Header;