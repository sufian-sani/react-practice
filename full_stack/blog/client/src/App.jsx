import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login.jsx";
import Blogs from "./pages/Blogs.jsx";
import Register from "./pages/Register.jsx";
import UserBlogs from "./pages/UserBlogs.jsx";
import CreateBlog from "./pages/CreateBlog.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";

function App() {
  return (
      <>
          <Header />
          <Routes>
              <Route path="/" element={<Blogs />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/my-blog" element={<UserBlogs />} />
              <Route path="/blog-details/:id" element={<BlogDetails />} />
              <Route path="/create-blog" element={<CreateBlog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
          </Routes>
      </>
  )
}

export default App
