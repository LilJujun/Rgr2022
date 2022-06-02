import React, { Component, useState, useEffect, useLayoutEffect } from 'react';
import s from './FindChats.module.css'
import axios from 'axios';
import authHeader from '../../auth';
import { Link } from "react-router-dom";


const user = JSON.parse(localStorage.getItem('user'));
const FindChats = (props) => {

const [chat, setChat] = useState();
  

const chekingChats = () =>{
  alert(document.getElementById("find").value)

  axios.post(`http://localhost:8080/ms/join/${user.id}`,{
    name: document.getElementById("find").value,
    
    
  },{headers:authHeader()}).then((res) =>{
    alert(res.data)
  }).catch(function(error){
    window.location.href = "http://localhost:3000/error";
    <Link to='/error'/>
  
  })
}





return (
  <div className={s.messeng}>
    

   
      Поиск чатов

    
    <div className={s.messages}>
      
    <input className={s.inputChats} type='text' name='find' id='find' playcholder="Введите имя пользователя"></input>
    
    <button className={s.btnChats} onClick={chekingChats}>Присоединиться</button>
    
     


    </div>

    
  </div>
);
  

}
export default FindChats;