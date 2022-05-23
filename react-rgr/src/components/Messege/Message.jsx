import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from './MessageCss.module.css';
import './MessageCss.module.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const DialogItem = (props) => {
  let path ="/ms/*";
  return (
    <div className={s.item}>
      <NavLink to={path} >{props.name}</NavLink>
    </div>
  )
}
const Messsage = (props) =>{
  return(
    <div className={s.messeng}>
          {props.messsage}
        </div>
  )
}

const Message = () => {
  return (
    <div className={s.messeng}>

      <div className={s.dialogs}>
        <div className={s.dialogsItem}>

          <DialogItem name="Eldar" id='1' />
          <DialogItem name="Katya" id='2' />
          <DialogItem name="Grisha" id='3' />
          

        </div>
        <Messsage messsage="Hello world" />

      </div>

    </div>

  );
}
export default Message;