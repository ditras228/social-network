import s from './Header.module.css';
import { RiQrCodeFill} from 'react-icons/ri';
import { BiUserCircle,  ImExit} from "react-icons/all";
type PropsType={
    data: any

}
const Header: React.ComponentType<PropsType> = (props) => {
        let u = props.data.data;
        return (
            <header className={s.header}>

                <div className={s.logo}>
                    <div className={s.icon}>
                        <RiQrCodeFill/></div>
                    Enigma <div className={s.region}>RU</div>
                </div>
                {

                    u.isAuth
                        ? <div className={s.main}>
                            <div className={s.login}>
                                <button className={s.logOut} onClick={props.data.logout}>{u.login}<ImExit/></button>
                            </div>
                        </div>
                        : <div className={s.main}>
                            <div className={s.login}>
                                <button className={s.logOut} onClick={props.data.logout}>LogIn<BiUserCircle/></button>
                            </div>
                        </div>
                }
            </header>
        )

    }
;

export default Header;