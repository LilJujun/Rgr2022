import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import s from "./Prof.module.css"
import Profile from './Profile/Profile';
import './Prof.module.css';


const Prof = () => {
    return (
        <div className={s.back}>
            <div className={s.messenger}>
                <Header />
                <Navbar />
                <Profile />
            </div>
        </div>

    )



}
export default Prof;
