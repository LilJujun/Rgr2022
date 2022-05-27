import React, { Component, useState, useEffect } from 'react';
import s from './MessageCss.module.css';
import './MessageCss.module.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import authHeader from '../../auth';


const user = JSON.parse(localStorage.getItem("user"))

const Messages = (props) => {

  let chat = useLocation();
  
  const [messeges, setMesseges] = useState([]);
  const [text, setText] = useState();
  

  useEffect(() => {
    
    console.log(chat.state.id)
    axios.get(`http://localhost:8080/ms/chat/${chat.state.id}`, { headers: authHeader() }).then((resp) => {


      const messeges = resp.data;
      setMesseges(messeges)

    }).catch(function (error) {
      alert(error)
    })
  
  return function cleanup(){
    
  }
  }, [setMesseges]);

  function MessageList(props) {
    
    const messages = props.messeges;
    const listMessages = messages.sort((a, b) => a.id > b.id ? 1 : -1).map((ms) =>

      <li key={ms.id}>
        {ms.text}

      </li>
    );
    return (
      <ul>{listMessages}</ul>
    )
  }

  function outputMessage() {
   

    console.log(user.id)
    console.log(text)
    axios.post(`http://localhost:8080/ms/chat/${chat.state.id}`, {
          text:text,
          user_id:user.id 
    }, { headers: authHeader() }).then(function () {
      axios.get(`http://localhost:8080/ms/chat/${chat.state.id}`, { headers: authHeader() }).then((resp) => {


        const messeges = resp.data;
        setMesseges(messeges)

      })
    }).catch(function (error) {
      alert(error);
    });
  }







return (
  <div className={s.messeng}>
    

    <div className={s.nameDialog}>
      Сообщения c {chat.state.name}

    </div>
    <div className={s.messages}>
      Сообщения
      <MessageList   messeges={messeges} />


    </div>

    <div className={s.inputButtonAndText}>
      <textarea type="text" placeholder="Помурчи в дискорде" id="mess" className={s.inputPage} />
      <button placeholder="Мяукнуть" onClick={() => {setText(document.getElementById("mess").value);outputMessage(); }  }>Нажми</button>

    </div>
  </div>
);
  

}
export default Messages;