import s from './Nav.module.css';
import {CgProfile} from  'react-icons/cg';
import {BiMessageSquare} from  'react-icons/bi';
import {BsNewspaper} from  'react-icons/bs';
import {BsMusicNoteBeamed} from  'react-icons/bs';
import {FiSettings} from  'react-icons/fi';
const Nav = ()=>{
    return(
        <nav className={s.nav}>
        <ul>
          <li><a href="#" className={s.a}> <CgProfile/> <span className={s.a_title}>Profile</span> </a></li>
          <li><a href="#"className={s.a}><BiMessageSquare/> <span className={s.a_title}>Message</span></a></li>
          <li><a href="#" className={s.a}><BsNewspaper/> <span className={s.a_title}>News</span></a></li>
          <li><a href="#" className={s.a}><BsMusicNoteBeamed/> <span className={s.a_title}>Music</span></a></li>
          <li><a href="#" className={s.a}><FiSettings/> <span className={s.a_title}>Settings</span></a></li>
        </ul>
      </nav>
      )

};

export default  Nav;