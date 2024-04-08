// LoginForm.jsx
import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {login} from "./AuthService.jsx";
// import { AuthProvider } from "./AuthProvider.jsx";
import { useAuth } from './AuthContext';

function LoginForm({ onLogin }) {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // const sendDataToHandle = () => {
    //     // Call the callback function with the data
    //     // console.log('fast')
    //     // setIsLoggedIn(true);
    //     onFormSubmit(true)
    //     // console.log(isLoggedIn)
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Login failed');
            }
            // Login successful, handle success (e.g., redirect user)
            // sendDataToHandle()
            // login(formData)
            // onLogin();
            // console.log('second')
            const { sessionId } = await response.json();
            login(sessionId);
            navigate('/');
        } catch (error) {
            console.error('Login error:', error);
            // Handle error (e.g., display error message to user)
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="username"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default LoginForm;
