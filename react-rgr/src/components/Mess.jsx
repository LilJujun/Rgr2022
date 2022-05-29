import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Messages from './Messege/Message';
import s from "./Mess.module.css"
import ChatList from './Navbar/ChatList';
import { useLocation } from 'react-router-dom';
import NavbarChats from './Navbar/NavbarChats';


class Mess extends React.Component {
    
    

    render(){
        return (
        <div className={s.back}>
            <div className={s.messenger}>

                <Header />
                <NavbarChats />
                <Messages />
            </div>
        </div>
    )
}
}
export default Mess;