import React, {  useState } from 'react';
import s from './Make.module.css';
import './Make.module.css';
import axios from 'axios';
import authHeader from '../../auth';



function Make() {
    const user = JSON.parse(localStorage.getItem('user'))

    const [chat, setChat] = useState(() => {
        return {
            name:'',
            description:'',
            type:''
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
const submitChecking = event =>{
    event.preventDefault();
    console.log(user.id)
    console.log(chat.name)
    console.log(chat.type)
    axios.post(`http://localhost:8080/ms/${user.id}/chat`, {
                name: chat.name,
                description: chat.description,
                type: chat.type
            },{headers:authHeader()}).then((res) => {
                    
                    window.location.href = "http://localhost:3000/ms"
            }).catch(function (error){
                alert(error);});
}

    return (
        <div className={s.messeng}>
            <div >
                Создание чата
                <form className={s.dialogsItem} onSubmit={submitChecking}>
                    <p> Имя чата<input type='text' name="name" id="name" value={chat.name} className={s.inputPage} onChange={changeInputAddChat}/> </p>

                    <p> Описание чата<input type='text' name="description" id="description" value={chat.description} className={s.inputPage}  onChange={changeInputAddChat}/></p>

                    <p>
                        <select name="type" value={chat.type} className={s.inputPage} onChange={changeInputAddChat}>
                            <option>Open</option>
                            <option>Closed</option>
                        </select>
                    </p>
                    <p><input type="submit"  value="Создать чат" />  </p>
                </form>
            </div>
            
            <div className={s.inputButton}>

            </div>
        </div>
    );


}
export default Make