import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './LoginAndReg/Login';
import Regestration from './LoginAndReg/Regestration';
import Mess from './components/Mess';
import Prof from './components/Prof';

const App = (props) => (


  <div >
   
    <Routes>
      <Route path='/' element={<Login />} />
    </Routes>
    <div>
      
      <Routes>
        
        <Route path='ms/*' element={<Mess dialogs={props.state.dialogs} message={props.state.message}/>}/>
        
        <Route path='/profile' element={<Prof />}/>
        <Route path='/reg' element={<Regestration/>}/>
          
        
      </Routes>
    </div>
  </div>



)



export default App;