import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from './MessageCss.module.css';
import './MessageCss.module.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Message = () => {
  return (
    <div className={s.messeng}>
      
      <div >

        <div className='item'>
          Eldar
        </div>
        <div className='item'>
          Katya
        </div>
        <div className='item'>
          Grisha
        </div>
      </div>
      
    </div>

  );
}
export default Message;