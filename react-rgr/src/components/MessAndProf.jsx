import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Message from './Messege/Message';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Profile/Profile';
import s from "./MessAndProf.module.css"


const MessAndProf = () => {



    <BrowserRouter>
        <div className={s.messenger}>
            <Header />
            <Navbar />
            <Message />
            {/* <div className={s.messenger-content}>
                <Routes>
                    <Route path='/profile' element={Profile} />
                    <Route path='/dialogs' element={Message} />
                </Routes>

            </div> */}
        </div>
    </BrowserRouter>

}




export default MessAndProf;
