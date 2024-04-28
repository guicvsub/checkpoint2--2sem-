import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  { BrowserRouter, Route } from "react-router-dom";
import AppRotas from './Router.jsx'; 
import Header from './companetes/Header/Header.jsx';
import Footer from './companetes/Footer/Fotter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    
      <AppRotas/>
    
    </BrowserRouter>
    
  </React.StrictMode>,
)
