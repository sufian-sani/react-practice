// LogoutButton.js
import React from 'react';

const LogoutButton = ({ onLogout }) => {
    const handleLogout = async () => {
        // Simulate logout request
        // Replace this with your actual logout logic
        await fetch('http://localhost:3000/api/logout', {
            method: 'POST',
        });
        onLogout();
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;
