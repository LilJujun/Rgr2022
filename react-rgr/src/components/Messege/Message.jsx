import React from 'react';
import s from './MessageCss.module.css';

const Message = () => {
  return (
    <div >
      <a>Messege</a>
      <div className='dialogs'>
        <div className='dialogs-item'>
          <div className='item'>
            Eldar
          </div>
          <div className='item'>
            Katya
          </div>
          <div className='item'>
            Grisha
          </div>
          </div>        
      </div>
      <div className='messanges'>

      </div>
    </div>

  );
}
export default Message;