import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home'
import Blog from './components/pages/blog/index'

import Project from './components/pages/projects/Projects'
import Navbar from './components/navbar/Navbar';
import About from './components/pages/about/About';

import './assets/App.css'
import './assets/Global.css'
import './assets/Mobile.css'

const App = () => {
  return (
    <>
      <Router basename='/'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/reviews/*" element={<Blog/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>

      </Router>
    </>
  )
}

export default App
