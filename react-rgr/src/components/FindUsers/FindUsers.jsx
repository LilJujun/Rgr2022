import React, { Component, useState, useEffect, useLayoutEffect } from 'react';
import s from './FindUsers.module.css';
import axios from 'axios';
import authHeader from '../../auth';



const FindUsers = (props) => {


  return (
    <div className={s.messeng}>


      <div>
        Поиск пользователей

        <div >
          <input type='text' name='find' id='find' playcholder="Введите имя пользователя"></input>
          <button>Поиск</button>
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