import React, { Profiler } from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Message from './Messege/Message';
import s from "./Prof.module.css"
import Profile from './Profile/Profile';
import { Outlet, Route, Routes } from 'react-router-dom';
import './Prof.module.css';


const Prof = () => {
    return (
        <>
            <div className={s.messenger}>
                <Header />
                <Navbar />
                <Profile />
            </div>

        </>
    )



}
export default Prof();
