import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
let dialogs = [

  { id: '1', name: 'Eldar',typeChat:"aoa",isAdmin:"asd" },
  { id: '2', name: 'Grisha' },
  { id: '3', name: 'Katya' }
  
  ]
  let message = [
    { id: '1', message: "Hello Wrold!!" },
    { id: '2', message: "I wanna die" }
  ]

axios.get("http://localhost:3000/ms")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App dialogs={dialogs} message={message}/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
