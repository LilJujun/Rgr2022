import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import FindUsers from './FindUsers.jsx';
import s from "./Find.module.css";


class Find extends React.Component {
    
    

    render(){
        return (
        <div className={s.back}>
            <div className={s.messenger}>

                <Header />
                <Navbar />
                <FindUsers />
            </div>
        </div>
    )
}
}
export default Find;