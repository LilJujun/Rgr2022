import React from 'react';
import s from './HeaderCss.module.css';
import log from './kotik.png'

const Header = () =>{
let logo = (
<img src={log} />
)

    return(
        <header className={s.header}>
          <div className={s.img} >{logo}</div>
          <div><p className={s.logo}>Kotogramm</p></div>
      </header >
    );
}
export default Header;