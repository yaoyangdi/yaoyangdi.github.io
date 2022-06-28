import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetail from './BlogDetail';
import data from "../../../assets/data/BlogData";
import BlogOverview from './BlogOverview';

const Blog = () => {
  return (
    <Routes>
          <Route path="" element={<BlogOverview/>}/>
          {data && data.map((route, index) => {
            return (<Route path={`/${route.fileName}`} element={<BlogDetail fileName={route.fileName}/> }/>)
          
          })
          }
    </Routes>
  )
}

export default Blog
