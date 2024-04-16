// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from './api';

const Login = ({ setLoggedIn }) => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await login(credentials.username, credentials.password);
            if (user) {
                setLoggedIn(true);
                navigate('/dashboard');
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Login failed', error.message);
            alert('Login failed');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" value={credentials.username} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
