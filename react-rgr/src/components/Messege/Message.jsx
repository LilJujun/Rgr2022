import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from './MessageCss.module.css';
import './MessageCss.module.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const DialogItem = (props) => {
  let path = "/ms/*";
  return (
    <div className={s.item}>
      <NavLink to={path} >{props.name}</NavLink>
    </div>
  )
}
const Messsage = (props) => {
  return (
    <div className={s.messeng}>
      {props.messsage}
    </div>
  )
}

const Message = () => {
  let dialogData = [
    
      {id: '1', name: 'Eldar'},
      {id: '2', name: 'Grisha'},
      {id: '3', name: 'Katya'}
    
  ]

  const messageData=[
    {id:'1',message:'Hello Wrold!!'},
    {id:'2', message:'I wanna die'}
  ]
  
  
let dialogsElement = dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
let messegesData = messageData.map(message => <Message name={message.name} />);



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