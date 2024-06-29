// SigninForm.js
import React, { useState } from 'react';

const SigninForm = ({ onSignIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Simulate sign-in request
        // Replace this with your actual sign-in logic
        const response = await fetch('http://localhost:3000/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
            const data = await response.json();
            onSignIn(data);
        } else {
            console.error('Sign-in failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SigninForm;
