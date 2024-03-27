import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Postlist from "./blogApp/Postlist.jsx";
import PostDetails from "./blogApp/PostDetails.jsx";
import CreatePost from "./blogApp/CreatePost.jsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/:id" element={<PostDetails />} />  {/* Using element prop */}
              <Route exact path="/" element={<Postlist />} /> {/* Using element prop */}
              <Route exact path="/create-post" element={<CreatePost />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
