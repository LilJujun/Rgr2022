import React from 'react';
import s from './MessageCss.module.css';
import './MessageCss.module.css';
import MessageItem from './MessageItem/MessageItem'
import Messsage from './MessageMess/MessageMess'


const Message = (props) => {
  let dialogsElement = props.dialogs.map(d => <MessageItem name={d.name} id={d.id} />);
  let messegesData = props.message.map(m => <Messsage message={m.message} id={m.id} />);



  return (
    <div className={s.messeng}>

      <div className={s.dialogs}>
        <div className={s.dialogsItem}>
          {dialogsElement}
        </div>
        {messegesData}
      </div>
      <div className={s.inputButton}>
        <textarea type="text" placeholder="Помурчи в дискорде"  className={s.inputPage}/>
        <input type="button" value="Мяукнуть"  />
        </div>
    </div>

  );
}
export default Message;