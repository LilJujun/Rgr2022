import React from 'react';
import s from './App.css';

import Message from './components/Messege/Message';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Login from './LoginAndReg/Login';
import Regestration from './LoginAndReg/Regestration';
import Mess from './components/Mess';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Prof from './components/Prof';

const App = () => (


  <div >
    <Routes>
      <Route path='/' element={<Login />} />
    </Routes>
    <div>
      
      <Routes>
        
        <Route path='/ms/*' element={Mess}/>
        <Route path='/profile' element={Prof}/>
        <Route path='/reg' element={<Regestration/>}/>
          
        
      </Routes>
    </div>
  </div>



)



export default App;
