import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import Header from './components/navbar/Navbar'
import Home from './components/pages/home/Home'
import Blog from './components/pages/blog/Blog'
import Project from './components/pages/projects/Projects'
import Navbar from './components/navbar/Navbar';
import About from './components/pages/about/About';

import './assets/App.css'

const App = () => {
  return (
    <div className='app-container'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>

      </Router>
    </div>
  )
}

export default App
