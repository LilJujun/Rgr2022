import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavbarCss.module.css';
import  './NavbarCss.module.css';

const setActive = ({isActive})=> isActive ? 'activeLink' : '';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink  to='/profile' >Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/ms' >Message</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/' >Exit</NavLink>
      </div>

    </nav>
  );
}
export default Navbar;