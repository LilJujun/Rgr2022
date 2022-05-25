import React from 'react';
import s from './HeaderCss.module.css';
import log from './kotik.png'

const Header = () =>{
let logo = (
<img src={log} />
)

    return(
        <header className={s.header}>
        {logo}
        {/* Лого нашей ргр */}
      </header >
    );
}
export default Header;