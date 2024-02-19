import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="">
      <Routes>
      <Route path='/'   element = {<Layout />} >  
        <Route index element = {<Home/>}  />
        <Route path='about' element = {<About/>}  />
        <Route path='contact' element = {<Contact/>}  />
        
      </Route>
      </Routes>
    </div>
  );
}

export default App;
