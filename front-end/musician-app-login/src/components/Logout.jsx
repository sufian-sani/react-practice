// Logout.jsx
import React from 'react';

const Logout = ({ onLogout }) => {
    return (
        <div>
            <h2>Logged out successfully</h2>
            <button onClick={onLogout}>Login Again</button>
        </div>
    );
};

export default Logout;
