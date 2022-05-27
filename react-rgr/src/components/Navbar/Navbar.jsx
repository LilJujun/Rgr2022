import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavbarCss.module.css';
import './NavbarCss.module.css';
import ChatList from './ChatList';

class Navbar extends React.Component {

  render() {
    return (
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to='/profile' >Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/ms' >Message</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/madechat">Создать чат</NavLink>
        </div>
        <div className={s.item}>
          <ChatList/>
        </div>
        <div className={s.item}>
          <NavLink to='/' >Exit</NavLink>
        </div>

      </nav>
    );
  }
}
export default Navbar;