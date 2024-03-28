// LogoutButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Clear user authentication state (e.g., clear tokens, remove user info from local storage)
            localStorage.removeItem('accessToken'); // Assuming you're storing the access token in local storage

            // Make API request to log the user out (optional, depending on your backend)
            const response = await fetch('http://localhost:3000/auth/logout', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}` // Include authentication token if needed
                }
            });

            if (!response.ok) {
                throw new Error('Logout failed');
            }

            // Redirect the user to the login page (or any other appropriate page)
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
}

export default LogoutButton;
