import React from 'react';
import s from './../MessageCss.module.css';


const Messsage = (props) => {
  return (
    <div className={s.messeng}>
      {props.message}
    </div>
    
  )
}


export default Messsage;