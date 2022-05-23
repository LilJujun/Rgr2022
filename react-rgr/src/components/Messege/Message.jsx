import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './MessageCss.module.css';
import './MessageCss.module.css';

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
      {props.message}
    </div>
    
  )
}

const Message = () => {
  let dialogs = [

    { id: '1', name: 'Eldar' },
    { id: '2', name: 'Grisha' },
    { id: '3', name: 'Katya' }

  ]

  let message = [
    { id: '1', message: "Hello Wrold!!" },
    { id: '2', message: "I wanna die" }
  ]


  let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messegesData = message.map(m => <Messsage message={m.message} id={m.id}/>);



  return (
    <div className={s.messeng}>

      <div className={s.dialogs}>
        <div className={s.dialogsItem}>

          
        {dialogsElement}

        </div>
       
          {messegesData}
      </div>

    </div>

  );
}
export default Message;