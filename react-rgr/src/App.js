import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Message from './components/Messege/Message';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Login from './LoginAndReg/Login';
import Regestration from './LoginAndReg/Regestration';
import MessAndProf from './components/MessAndProf';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'login',
    }
  }

      OnMainProfile = (props) => {
        this.setState({ route: 'profile' })
      }
      OnMainMessenge = (props) =>{
        this.setState({route:'messenge'})
      }
      OnMainLogin = (props) =>{
        this.setState({route:'login'})
      }
      OnRegestration= (props)=>{
        this.setState({route:'registration'})
      }
      render(){
        const{route}=this.state;
        if (route === 'login'){
          return(
            <div>
              <Login Login={this.OnMainProfile}/>
              
            </div>
          );
        }
        else if(route === ' profile'){
          return(
            <div>
              <MessAndProf Message={this.OnMainMessenge}/>
            </div>
          );
        }
        
        else if(route === 'messenge'){
          return(
            <div>
              <Message />
            </div>
          )
        }
        
      
      }
  
}



export default App;
