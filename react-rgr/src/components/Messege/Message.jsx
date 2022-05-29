import React, { Component, useState, useEffect, useLayoutEffect } from 'react';
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

  const changeInputText = event => {
    event.persist()
    setText(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      }
    })
  }


  useEffect(() => {

    axios.get(`http://localhost:8080/ms/chat/${chat.state.id}`, { headers: authHeader() }).then((resp) => {

      setMesseges(resp.data)
    }).catch(function (error) {
      alert(error)
    })
  }, [setMesseges]);

  function interval (){
    console.log("Хуй")
    axios.get(`http://localhost:8080/ms/chat/${chat.state.id}`, { headers: authHeader() }).then((resp) => {

      setMesseges(resp.data)
    }).catch(function (error) {
      alert(error)
    })
  }
  setInterval(()=>{interval()},2500)

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
    


    axios.post(`http://localhost:8080/ms/chat/${chat.state.id}`, {
      text: document.getElementById('mess').value,
      user_id: user.id
    }, { headers: authHeader() }).then(function () {
      document.getElementById('mess').value = '';
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


      <div className={s.nameDialog} >
        Сообщения c {chat.state.name}

      </div>
      <div className={s.messages}>
        Сообщения

        <div>
          <MessageList messeges={messeges} />
        </div>

        <div>

        </div>



      </div>

      <div className={s.inputButtonAndText}>

        <textarea type="text" placeholder="Помурчи в дискорде" id="mess" className={s.inputPage} />
        <button type='submit' onClick={() => { outputMessage(); }}>
          Мяукнуть
        </button>



      </div>
    </div>
  );


}
export default Messages;