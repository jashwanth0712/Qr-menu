import  React, { useReducer }  from 'react';
import axios from "axios";
import Menu_page from './menu_page';
import Menu from '../menu.json';
import './App.css'
import Error_page  from './error_page';
import Cart from './cart';
import Admin from './admin';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
const App =()=>{
  //console.log("app .js ran  " +localStorage.getItem('menu'));

  if(!localStorage.getItem('menu'))
  {
    console.log("jashwanrh")
    localStorage.setItem('menu',JSON.stringify(Menu));
  }
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Menu_page />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error_page/>} />
        <Route path="/admin" element={<Admin/>} />

      </Routes>
    </Router>
   
    //<Cart/>
//    <Menu_page/>
    )
  }


export default App;