import React, { Component, useState, useEffect, useLayoutEffect } from 'react';
import s from './FindUsers.module.css';
import axios from 'axios';
import authHeader from '../../auth';
import { useLocation } from 'react-router-dom';

let timer = null;
const user = JSON.parse(localStorage.getItem('user'));
const FindUsers = (props) => {

// const [friends, setFriends] = useState([]);
const stateValue = useState([]);
const friends = stateValue[0];
const setFriends = stateValue[1]

const chekingFriends = () =>{
  axios.post(`http://localhost:8080/ms/addfriend/${user.id}`,{

    nickname: document.getElementById("find").value
    
    
  },{headers:authHeader()}).then((resp) =>{
    alert(resp.data)
  })
  .then(function(){
    console.log('aoa')
    axios.get(`http://localhost:8080/ms/friends/${user.id}`,{headers:authHeader()}).then((resp)=>{
    
    setFriends(resp.data)
    })
  }).catch(function(error){
    alert(error)
  })
}

useEffect(() => {
 axios.get(`http://localhost:8080/ms/friends/${user.id}`, { headers: authHeader() }).then((resp) => {
    console.log("Zalupa")
    setFriends(resp.data)
  }).catch(function (error) {
    alert(error)
  })
  
}, [setFriends]);

function FriendsList(props) {
  
  
console.log(props)
  const dryzya = props.friends;
 
  const listFriends = dryzya.map((ms) =>

    <li key={ms.id}>
      
      {ms.nickname}
      

    </li>
  );
  return (
    <ul>{listFriends}</ul>

  )
}

  return (
    <div className={s.messeng}>


      <div>
        Поиск пользователей

        <div >
          <input class={s.inputUsers} type='text' name='find' id='find' placeholder="Введите имя пользователя"></input>
          <button class={s.btnUsers} onClick={chekingFriends}>Добавить</button>
          
        </div>
        <div>
        Друзья
        <ul>
          <FriendsList friends={friends}/>
        </ul>

      </div>

      </div>
      


    </div>
  );


}
export default FindUsers;