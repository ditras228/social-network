import s from './Nav.module.css';
import {CgProfile} from  'react-icons/cg';
import {BiMessageSquare} from  'react-icons/bi';
import {BsNewspaper} from  'react-icons/bs';
import {BsMusicNoteBeamed} from  'react-icons/bs';
import {FiSettings} from  'react-icons/fi';
import {FiUsers} from  'react-icons/fi';
import {NavLink} from 'react-router-dom';
const Nav = ()=>{
    return(
        <nav className={s.nav}>
        <ul>
          <li><NavLink to="/profile" className={s.a} activeClassName={s.activeLink}><CgProfile/><span className={s.a_title}>Profile</span> </NavLink></li>
          <li><NavLink to="/users" className={s.a} activeClassName={s.activeLink}><FiUsers/><span className={s.a_title}>Users</span> </NavLink></li>
          <li><NavLink to="/dialogs" className={s.a} activeClassName={s.activeLink}><BiMessageSquare/><span className={s.a_title}>Message</span></NavLink></li>
          <li><NavLink to="/chat" className={s.a} activeClassName={s.activeLink}><BiMessageSquare/><span className={s.a_title}>Chat</span></NavLink></li>
          <li><NavLink to="/news"  className={s.a} activeClassName={s.activeLink}><BsNewspaper/><span className={s.a_title}>News</span></NavLink></li>
          <li><NavLink to="/music"  className={s.a} activeClassName={s.activeLink}><BsMusicNoteBeamed/><span className={s.a_title}>Music</span></NavLink></li>
          <li><NavLink to="/settings" className={s.a} activeClassName={s.activeLink}><FiSettings/><span className={s.a_title}>Settings</span></NavLink></li>
        </ul>
      </nav>
      )

};

export default  Nav;