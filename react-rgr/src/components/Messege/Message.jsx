import React, { Component, useState, useEffect, useLayoutEffect } from 'react';
import s from './MessageCss.module.css';
import './MessageCss.module.css';
import '../../App.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import authHeader from '../../auth';
import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';


const user = JSON.parse(localStorage.getItem("user"))
let timer = null;
const Messages = (props) => {

  let chat = useLocation();

  const [messeges, setMesseges] = useState([]);
  const [text, setText] = useState();

  


  
  useEffect(() => {
    timer = setInterval(()=>{axios.get(`http://localhost:8080/ms/chat/${chat.state.id}`, { headers: authHeader() }).then((resp) => {
      console.log("Zalupa")
      setMesseges(resp.data)
    }).catch(function (error) {
      alert(error)
    })},2500)
    return () => {clearInterval(timer);}
  }, [setMesseges]);

  
  

  function MessageList(props) {

    const messages = props.messeges;
    function checkSender(props){
     

      if(props == user.id){
        return 'right';
      }else{
        return 'left';
      }
    }
    const listMessages = messages.sort((a, b) => a.id > b.id ? 1 : -1).map((ms) =>

      <li className={checkSender(ms.user_id)} key={ms.id}>
        
        <div className={s.messUser}>{ms.username}</div>
        {ms.text}
        

      </li>
    );
    return (
      <ul className={s.messList}>{listMessages}</ul>

    )
  }

  function outputMessage() {



    axios.post(`http://localhost:8080/ms/chat/${chat.state.id}`, {
      text: document.getElementById('mess').value,
      user_id: user.id
    }, { headers: authHeader() }).then(function () {
      document.getElementById('mess').value = '';
      axios.get(`http://localhost:8080/ms/chat/${chat.state.id}`, { headers: authHeader() }).then((resp) => {

        setMesseges(resp.data)

      })
    }).catch(function (error) {
      alert(error);
    });
  }


  return (
    <div className={s.messeng}>


      <div className={s.nameDialog} >
      <p className={s.nameDialogText}>
        Сообщения c {chat.state.name}
        </p>
      </div>
      <div className={s.messages}>


        <div>
          <MessageList messeges={messeges} />
        </div>
      </div>

      <div className={s.inputButtonAndText}>

        <textarea type="text" placeholder="Помурчи в дискорде" id="mess" className={s.inputPage} />
        <button className={s.inputButton} type='submit' onClick={() => { outputMessage(); }}>          Мяукнуть
        </button>



      </div>
    </div>
  );


}
export default Messages;