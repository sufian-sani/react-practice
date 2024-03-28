// SignupForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SignupForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add logic to submit form data (e.g., send to server)
        try {
            const response = await fetch('http://localhost:3000/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Signup failed');
            }
            // Signup successful, handle success (e.g., redirect user)
            navigate('/');
        } catch (error) {
            console.error('Signup error:', error);
            // Handle error (e.g., display error message to user)
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignupForm;
