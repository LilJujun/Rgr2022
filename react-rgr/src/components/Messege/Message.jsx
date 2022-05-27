import React, { Component, useState } from 'react';
import s from './MessageCss.module.css';
import './MessageCss.module.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';



const Messages = () =>  {

  const [text, setText] = useState();

  

  let chat = useLocation();
  console.log(chat.state.name)
  return (
      <div className={s.messeng}>
          
        <div className={s.dialogs}>
          Сообщения c {chat.state.name}
          <div className={s.dialogsItem}>
          </div>

        </div>
          <div className={s.inputButton}>
          <textarea type="text" placeholder="Помурчи в дискорде" id="mess" className={s.inputPage} />
          <button placeholder="Мяукнуть" onClick={() => setText(document.getElementById("mess").value)}>Нажми</button>
          {/* {console.log(text)} */}
          </div>
      </div>
    );
  

}
export default Messages;