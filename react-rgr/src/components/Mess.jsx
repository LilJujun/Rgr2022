import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Message from './Messege/Message';
import s from "./Mess.module.css"


const Mess = (props) => {


    return (
        <div className={s.back}>
            <div className={s.messenger}>

                <Header />
                <Navbar />
                <Message dialogs={props.dialogs} message={props.message} />
            </div>
        </div>
    )
}
export default Mess;