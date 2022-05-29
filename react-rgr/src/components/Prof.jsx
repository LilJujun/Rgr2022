import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import NavbarChats from './Navbar/NavbarChats';
import s from "./Prof.module.css"
import Profile from './Profile/Profile';


const Prof = () => {
    return (
        <div className={s.back}>
            <div className={s.messenger}>
                <Header />
                <NavbarChats />
                <Profile />
            </div>
        </div>

    )



}
export default Prof;
