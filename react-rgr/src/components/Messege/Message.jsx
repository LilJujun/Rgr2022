import React from 'react';
import s from './MessageCss.module.css';
import './MessageCss.module.css';
import MessageItem from './MessageItem/MessageItem'
import Messsage from './MessageMess/MessageMess'
import { render } from '@testing-library/react';


const changeInputLogin = event => {
  event.persist()
  setLogin(prev => {
      return {
          ...prev,
          [event.target.name]: event.target.value,
      }
  })
}
const user = JSON.parse(localStorage.getItem("user"))
const Chat = () =>{
 
  return(
      
        console.log('Aoa')
      
  )
}


class Message extends React.Component {

state ={
        id:user.id,
        chat_id:user.chat_id
    }

   



  render() {
    return (
      <div className={s.messeng}>

        <div className={s.dialogs}>
          <div className={s.dialogsItem}>
            Жопа
            Хуй
            
          </div>

        </div>
        <div className={s.inputButton}>
          <textarea type="text" placeholder="Помурчи в дискорде" id="textarea" className={s.inputPage} onChange={changeInputLogin}/>
          <button type="button" placeholder="Мяукнуть" onClick={() =>
            console.log("Aoa")
           
          }>Нажми</button>
        </div>
      </div>

    );
  }
}
export default Message;