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
import MusicianForm from "./components/MusicianForm.jsx";
import AlbumForm from "./components/AlbumForm.jsx";
import MusicianDetails from "./components/MusicianDetails.jsx";
import AlbumDetails from "./components/AlbumDetails.jsx";
import MusicianUpdateForm from "./components/MusicianUpdateForm.jsx";
import AlbumUpdateForm from "./components/AlbumUpdateForm.jsx";
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const handleLogout = () => {
    //     // Perform logout logic
    //     setIsLoggedIn(false);
    // };
    // let isLoggedIn = '';

    const handleLogin = (data) => {
        if(data){
            setIsLoggedIn(true);
            // onFormSubmit(true);
        }
        // console.log('data',data)
        // console.log('isLoggedIn',isLoggedIn)
    };
    console.log()

  return (
      <Router>
          <Navbar loginStatus={isLoggedIn} />
          <Routes>
              <Route path="/" element={<MusicianList />} />  {/* Route for MusicianList at root */}
              <Route path="/albums" element={<AlbumList />} />  {/* Route for AlbumList at /albums */}
              <Route path="/addmusician" element={<MusicianForm />} />  {/* Route for AlbumList at /albums */}
              <Route path="/addalbum" element={<AlbumForm />} />  {/* Route for AlbumList at /albums */}
              <Route path="/musiciandetails/:musicianId" element={<MusicianDetails />} />
              <Route path="/musician/:musicianId/update" element={<MusicianUpdateForm />} />
              <Route path="/albumdetails/:albumId" element={<AlbumDetails />} />
              <Route path="/album/:albumId/update" element={<AlbumUpdateForm />} />
              <Route path="/signup" element={<SignupForm />} />  {/* Route for AlbumList at /signup */}
              <Route path="/login" element={<LoginForm onFormSubmit={handleLogin} />} />  {/* Route for AlbumList at /login */}
          </Routes>
      </Router>
  )
}

export default App
