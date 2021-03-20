import  s from './Header.module.css';
import{RiQrCodeFill} from 'react-icons/ri';
const Header = ()=>{
    return(
    <header className={s.header}>

        <a href='#' className={s.logo}><div className={s.icon}><RiQrCodeFill/></div> Enigma <div className={s.region}>RU</div></a>
    </header>
    )

};

export default  Header;