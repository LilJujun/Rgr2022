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
  const [users, setUsers] = useState([]);




  useEffect(() => {
    timer = setInterval(() => {
      axios.get(`http://localhost:8080/ms/chat/${chat.state.id}`, { headers: authHeader() }).then((resp) => {
        console.log("Работает")
        setMesseges(resp.data)
      }).catch(function (error) {
        alert(error)
      });
      axios.get(`http://localhost:8080/ms/chatusers/${chat.state.id}`, { headers: authHeader() }).then((resp) => {

        setUsers(resp.data)
      }).catch(function (error) {
        alert(error)
      });
    }, 2500)
    return () => { clearInterval(timer); }
  }, [setMesseges]);




  function MessageList(props) {

    const messages = props.messeges;
    function checkSender(props) {


      if (props == user.id) {
        return 'right';
      } else {
        return 'left';
      }
    }
    const listMessages = messages.sort((a, b) => a.id > b.id ? 1 : -1).map((ms) =>

      <li className={checkSender(ms.user_id)} key={ms.id}>

        <div className={s.messUser}>{ms.username}</div>
        {ms.text}
        {ms.date}


      </li>
    );
    return (
      <ul className={s.messList}>{listMessages}</ul>

    )
  }
  const changeDeleteUser = event => {
    event.persist()
    setUsers(prev => {
        return {
            ...prev,
            [event.target.name]: event.target.value,
        }
    })
}

  function UserList(props) {
    const user = props.users;
    const usersList = user.map((ms) =>

      <option >
        {ms}
      </option>

    );
    return (
      <select  >{usersList}</select>
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


  const submitDelete = event => {
   
    let del = document.getElementById('delete').value;
    if(del === user.username){
      alert("Вы не можете удалить самого себя")
    }else if(user.id != chat.state.isAdmin){
        alert("Вы не являетесь админом")
    }else{
    console.log("aoa");
    axios.post(`http://localhost:8080/ms/userchat/${chat.state.id}/`, {
      nickname: del
    }, { headers: authHeader() }).then((res) => {
        alert(res.data);

    }).catch(function (error) {
      alert(error);
    });
  }
  }

  return (
    <div className={s.messeng}>


      <div className={s.nameDialog}  >
        <UserList users={users} />
       
        <p className={s.nameDialogText}>
          Сообщения c {chat.state.name}
        <input type="text" name='delete' id='delete'></input>
        <input type='submit' onClick={submitDelete} value="Удалить"></input>
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