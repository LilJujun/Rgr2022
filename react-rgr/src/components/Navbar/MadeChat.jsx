import React from 'react';
import Header from '../Header/Header';
import Navbar from './Navbar';
import Make from './Make';
import s from "./MadeChat.module.css"



class MadeChat extends React.Component {
    
render(){
    return (
        <div className={s.back}>
            <div className={s.messenger}>

                <Header />
                <Navbar />
                <Make />
            </div>
        </div>
    )
}
}
export default MadeChat;