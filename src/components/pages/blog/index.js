import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetail from './BlogDetail';
import data from "../../../assets/data/BlogData";
import BlogOverview from './BlogOverview';
import './Blog.css'



export const Blog = () => {
  return (
    <Routes>
          <Route path="" element={<BlogOverview/>}/>
          {data && data.map((route, index) => {
            return (<Route path={`/${route.fileName}`} element={<BlogDetail fileName={route.fileName}  title={route.title} date={route.date} />}/>)
          
          })
          }
    </Routes>
  )
}

export default Blog
