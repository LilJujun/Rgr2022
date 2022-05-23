import React from 'react';
import { Link } from 'react-router-dom';
import s from './HeaderCss.module.css';

const Header = () =>{
    return(
        <header className={s.header}>
          <Link to='/header'></Link>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png' />
        {/* Лого нашей ргр */}
      </header >
    );
}
export default Header;