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

                u.isAuth
                    ?<div className={s.login}>{u.login}
                    <button onClick={props.data.logout}>LogOut</button></div>
                    :<button onClick={props.data.logout}>LogIn</button>
            }
        </header>
    )

};

export default Header;