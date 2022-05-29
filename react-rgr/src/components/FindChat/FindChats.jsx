import React, { Component, useState, useEffect, useLayoutEffect } from 'react';
import s from './FindChats.module.css'
import axios from 'axios';
import authHeader from '../../auth';



const FindChats = (props) => {


return (
  <div className={s.messeng}>
    

   
      Поиск чатов

    
    <div className={s.messages}>
    <input type='text' name='find' id='find' playcholder="Введите имя пользователя"></input>
    <button>Поиск</button>
     


    </div>

    
  </div>
);
  

}
export default FindChats;