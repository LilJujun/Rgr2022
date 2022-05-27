import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Messages from './Messege/Message';
import s from "./Mess.module.css"

class Mess extends React.Component {
    constructor(props){
        super(props)
        
        console.log(this.props.location);
        this.state={chat:this.props.location}  
    }
    componentWillReceiveProps(nextProps){
        this.setState({chat:this.props.location})
    }
    render(){
        return (
        <div className={s.back}>
            <div className={s.messenger}>

                <Header />
                <Navbar />
                <Messages chat={this.state.chat}/>
            </div>
        </div>
    )
}
}
export default Mess;