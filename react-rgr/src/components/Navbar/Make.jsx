import React, { useState } from 'react';
import s from './Make.module.css';
import './Make.module.css';
import axios from 'axios';
import authHeader from '../../auth';
import { Link } from "react-router-dom";



function Make() {
    const user = JSON.parse(localStorage.getItem('user'))

    const [chat, setChat] = useState(() => {
        return {
            name: '',
            description: '',
            type: 'Open',
            friend: ''
        }
    })
    const changeInputAddChat = event => {
        event.persist()
        setChat(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }
    const submitChecking = event => {
        event.preventDefault();
        if (chat.name === '') {
            alert("Введите название чата")
        } else if (chat.friend === '') {
            alert("Введите друга, с которым хотите начать чат")
        } else {
            axios.post(`http://localhost:8080/ms/${user.id}/chat`, {
                name: chat.name,
                description: chat.description,
                type: chat.type,
                friendname: chat.friend
            }, { headers: authHeader() }).then((res) => {
                alert(res.data)

                window.location.href = "http://localhost:3000/emptytitle"


            }).catch(function (error) {
                window.location.href = "http://localhost:3000/error";
                <Link to='/error'/>
                
            });
        }
    }

    return (
        <div className={s.messeng}>
            {console.log(chat.name)}
            <div >
                <p className={s.h}>Создание чата</p>
                <form className={s.dialogsItem} onSubmit={submitChecking}>
                    <p> Имя чата<input className={s.inputMakeChat} type='text' name="name" id="name" value={chat.name} onChange={changeInputAddChat} /> </p>
                    <p> Описание чата<input className={s.inputMakeChat} type='text' name="description" id="description" value={chat.description} onChange={changeInputAddChat} /></p>
                    <p> Кого вы хотите добавить?<input className={s.inputMakeChat} type='text' name="friend" id='friend' value={chat.friend} onChange={changeInputAddChat}></input> </p>
                    <p> Тип чата</p>
                    <select name="type" value={chat.type} className={s.inputPage} onChange={changeInputAddChat}>
                        <option disabled>Выберите тип чата</option>
                        <option >Open</option>
                        <option>Closed</option>
                    </select>
                    <p><input className={s.btnMakeChat} type="submit" value="Создать чат" />  </p>
                </form>
            </div>
        </div>
    );


}
export default Make