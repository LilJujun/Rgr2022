import React, { Component, useState, useEffect, useLayoutEffect } from 'react';
import s from './FindUsers.module.css';
import axios from 'axios';
import authHeader from '../../auth';


const user = JSON.parse(localStorage.getItem('user'));
const FindUsers = (props) => {

const [friend, setFriend] = useState([]);


// axios.get(`http://localhost:8080/ms/friends/${user.id}`){
//   friend:user.id
//   setFriend(friend);
// }



  return (
    <div className={s.messeng}>


      <div>
        Поиск пользователей

        <div >
          <input class={s.inputUsers} type='text' name='find' id='find' placeholder="Введите имя пользователя"></input>
          <button class={s.btnUsers}>Поиск</button>
        </div>
        <div>
        Друзья
        <ul>
          <li>Эльдар чмо</li>






        </ul>

      </div>

      </div>
      


    </div>
  );


}
export default FindUsers;