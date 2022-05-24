import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../MessageCss.module.css';


const MessageItem = (props) => {
  let path = "/ms/*";
  return (
    <div className={s.item}>
      <NavLink to={path} >{props.name}</NavLink>
    </div>
  )
}

export default MessageItem;