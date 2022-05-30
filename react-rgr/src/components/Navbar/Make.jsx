import React, { useState } from 'react';
import s from './Make.module.css';
import './Make.module.css';
import axios from 'axios';
import authHeader from '../../auth';



function Make() {
    const user = JSON.parse(localStorage.getItem('user'))

    const [chat, setChat] = useState(() => {
        return {
            name: '',
            description: '',
            type: ''
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
        console.log(user.id)
        console.log(chat.name)
        console.log(chat.type)
        axios.post(`http://localhost:8080/ms/${user.id}/chat`, {
            name: chat.name,
            description: chat.description,
            type: chat.type
        }, { headers: authHeader() }).then((res) => {
            if (chat.name === '') {
                alert("Введите название чата")
            } else {

                window.location.href = "http://localhost:3000/emptytitle"
            }

        }).catch(function (error) {
            alert(error);
        });
    }

    return (
        <div className={s.messeng}>
            {console.log(chat.name)}
            <div >
                <p className={s.h}>Создание чата</p>
                <form className={s.dialogsItem} onSubmit={submitChecking}>
                    <p> Имя чата<input className={s.inputMakeChat} type='text' name="name" id="name" value={chat.name} onChange={changeInputAddChat} /> </p>

                    <p> Описание чата<input className={s.inputMakeChat} type='text' name="description" id="description" value={chat.description} onChange={changeInputAddChat} /></p>

                    <p> Тип чата</p>
                    <div value={chat.type} className={s.inputRadio} onChange={changeInputAddChat}>
                    <label htmlFor='rad1'> Open</label><input id='rad1' type="radio" name="type" checked />
                    <label htmlFor='rad2'>Closed</label><input id='rad2' type="radio" name="type"/>
                    </div>
                    {/* <select name="type" value={chat.type} className={s.inputPage} onChange={changeInputAddChat}>
                            <option>Open</option>
                            <option>Closed</option>
                        </select> */}

                    <p><input className={s.btnMakeChat} type="submit" value="Создать чат" />  </p>
                </form>
            </div>
        </div>
    );


}
export default Make