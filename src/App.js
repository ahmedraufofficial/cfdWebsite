import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Evaluation from './pages/Evaluation';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './components/Login';
import Auctions from './pages/Auctions';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/car-valuation' element={<Evaluation/>}/>
      <Route exact path='/about-us' element={<AboutUs/>}/>
      <Route exact path='/contact-us' element={<ContactUs/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/auctions' element={<Auctions/>} />
    </Routes>
    </Router>
    

    
  );
}

export default App;
