import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import MainApp from "./components/Navbar.jsx";
import MusicianList from './components/MusicianList.jsx';
import AlbumList from './components/AlbumList.jsx';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm.jsx';
import LoginForm from './components/LoginForm.jsx';
function App() {

  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<MusicianList />} />  {/* Route for MusicianList at root */}
              <Route path="/albums" element={<AlbumList />} />  {/* Route for AlbumList at /albums */}
              <Route path="/signup" element={<SignupForm />} />  {/* Route for AlbumList at /signup */}
              <Route path="/login" element={<LoginForm />} />  {/* Route for AlbumList at /login */}
          </Routes>
      </Router>
  )
}

export default App
