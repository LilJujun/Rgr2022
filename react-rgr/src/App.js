import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './LoginAndReg/Login';
import Registration from './LoginAndReg/Regestration';
import Accept from './LoginAndReg/Accept';
import Mess from './components/Mess';
import Prof from './components/Prof';
import MadeChat from './components/Navbar/MadeChat';
import EmptyTitle from './components/EmptyTitle/EmptyTitle';
import Find from './components/FindUsers/Find';
import FindCh from './components/FindChat/FindCh';




const App = () => (

  <div >

    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/emptytitle' element={<EmptyTitle />} />
      <Route path='/ms' element={<Mess />} />
      <Route path='/profile' element={<Prof />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/accept' element={<Accept />} />
      <Route path='/madechat' element={<MadeChat />} />
      <Route path='/friends' element={<Find />} />
      <Route path='/findchats' element={<FindCh />} />
    </Routes>

  </div>



)



export default App;