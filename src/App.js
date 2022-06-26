import React, { useState } from 'react';
import './App.css';

import Home from './Cmpnts/Home';
import Profile from './Cmpnts/Profile'
import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = (props) => {
  //const searchFun = (e) =>{
    //console.log(e)
 // }
 
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
    );
}
export default App;

