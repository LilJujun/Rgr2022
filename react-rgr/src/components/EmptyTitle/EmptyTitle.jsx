import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import s from "./EmptyTitle.module.css"
import EmptyT from './EmptyT';


const EmptyTitle = () => {
    return (
        <div className={s.back}>
            <div className={s.messenger}>
                <Header />
                <Navbar />
                <EmptyT/>
            </div>
        </div>

    )



}
export default EmptyTitle;
