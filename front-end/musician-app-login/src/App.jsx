// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername('');
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home loggedIn={loggedIn} />} />
                <Route path="/dashboard" element={<Dashboard username={username} onLogout={handleLogout} />} />
                <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
            </Routes>
        </Router>
    );
}

function Home({ loggedIn }) {
    return loggedIn ? <Navigate to="/dashboard" replace /> : <Login />;
}

export default App;
