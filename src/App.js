import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Get from './user/Get'
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Post2 from './user/Post2';
// import Navbar from './Examples/Navbar';
import './App.css';
import About from './Example2/About';
// import Home from './Examples/Home';
// import About from './Examples/About';
// import Edit from './user/Edit';
// import Contact from './Examples/Contact';
import Add from './Example2/Add';
import Home from './Example2/Home';
import Navbar from './Example2/Navbar';
import Update from './Example2/Update';
import View from './Example2/View';

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path='/' element={< Home />}/>
        <Route exact path='/about' element={< About />}/>
        <Route exact path='/contact' element={< Contact />}/>
        <Route exact path='/post2' element={< Post2 />}/>
        <Route exact path='/user/:id' element={< Edit />}/>
        <Route exact path='/view/:id' element={< Get />}/>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/add' element={<Add/>} />
        <Route exact path='/view/:id' element={<View/>} />
        <Route exact path='/example2/:id' element={<Update/>} />
        <Route exact path='/about' element={<About/>} />
      </Routes>
      
      </BrowserRouter>
      
      
    </div>
  )
}

export default App