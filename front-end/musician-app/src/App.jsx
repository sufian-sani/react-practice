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
import {isAuthenticated, logout} from "./components/AuthService.jsx";
import { AuthProvider } from './components/AuthContext';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());
    // const [isLogOut, setIsLogOut] = useState(true)

    // const handleLogout = () => {
    //     // Perform logout logic
    //     setIsLoggedIn(false);
    // };
    // let isLoggedIn = '';

    // const handleLogin = (data) => {
    //     if(data){
    //         setIsLoggedIn(true);
    //         // onFormSubmit(true);
    //     }
    //     console.log('data',data)
        // console.log('isLoggedIn',isLoggedIn)
    // };
    // // console.log()
    //
    // const handleLogoutStatus = () => {
    //     setIsLoggedIn(false);
    // }

    useEffect(() => {
        // Listen for storage events (e.g., in case the user logs out in another tab)
        const handleStorageChange = () => {
            setIsLoggedIn(isAuthenticated());
        };
        window.addEventListener('storage', handleStorageChange);

        // Cleanup function
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    },[])

    const handleLogout = () => {
        logout();
        setIsLoggedIn(false);
    };

  return (
      <AuthProvider>
          <Router>
              <Navbar loginStatus={isLoggedIn} logoutStatus={handleLogout} />
              <Routes>
                  <Route path="/" element={<MusicianList />} />  {/* Route for MusicianList at root */}
                  <Route path="/albums" element={<AlbumList />} />  {/* Route for AlbumList at /albums */}
                  <Route path="/addmusician" element={<MusicianForm />} />  {/* Route for AlbumList at /albums */}
                  <Route path="/addalbum" element={<AlbumForm />} />  {/* Route for AlbumList at /albums */}
                  <Route path="/musiciandetails/:musicianId" element={<MusicianDetails loginStatus={isLoggedIn} />} />
                  <Route path="/musician/:musicianId/update" element={<MusicianUpdateForm />} />
                  <Route path="/albumdetails/:albumId" element={<AlbumDetails />} />
                  <Route path="/album/:albumId/update" element={<AlbumUpdateForm />} />
                  <Route path="/signup" element={<SignupForm />} />  {/* Route for AlbumList at /signup */}
                  <Route path="/login" element={<LoginForm onLogin={() => setIsLoggedIn(true)} />} />  {/* Route for AlbumList at /login */}
              </Routes>
          </Router>
      </AuthProvider>
  )
}

export default App
