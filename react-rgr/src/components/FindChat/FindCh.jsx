import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import FindChats from './FindChats'
import s from "./FindCh.module.css";


class FindCh extends React.Component {
    
    

    render(){
        return (
        <div className={s.back}>
            <div className={s.messenger}>

                <Header />
                <Navbar />
                <FindChats />
            </div>
        </div>
    )
}
}
export default FindCh;