import React, { Profiler } from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Message from './Messege/Message';
import s from "./Mess.module.css"
import Profile from './Profile/Profile';
import { Outlet, Route, Routes } from 'react-router-dom';
import './Mess.module.css';


const Mess = () => {
    return (
        <>
            <div className={s.messenger}>
                <Header />
                <Navbar />
                <Message />
            </div>

        </>
    )



}
export default Mess();
