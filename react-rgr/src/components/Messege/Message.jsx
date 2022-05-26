import React, { Component, useState } from 'react';
import s from './MessageCss.module.css';
import './MessageCss.module.css';
import axios from 'axios';




class Messages extends Component {

  renderMessage(message) {
    const { member, text } = message;
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ?
      "Messages-message currentMember" : "Messages-message";
    return (
      <li className={className}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className="Message-content">
          <div className="username">
            {member.clientData.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

 




  render() {
    const { messages } = this.props
    return (
      <div className={s.messeng}>

        <div className={s.dialogs}>
          <div className={s.dialogsItem}>
            Жопа
            Хуй
            Член
            Пизда
          </div>

        </div>
          <div className={s.inputButton}>
          <textarea type="text" placeholder="Помурчи в дискорде" id="textarea" className={s.inputPage} />
          <button type="button" placeholder="Мяукнуть" >Нажми</button>
          </div>
      </div>
    );
  }

}
export default Messages;