// MusicianForm.js
import React, { useState } from 'react';

function MusicianForm() {
    const [formData, setFormData] = useState({
        name: '',
        instrument: '',
        musicianarea: ''
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/musicians/', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to create musician');
            }
            // Musician created successfully, handle success (e.g., display success message)
        } catch (error) {
            console.error('Create musician error:', error);
            setError('Failed to create musician. Please try again.'); // Set error message
        }
    };

    return (
        <div>
            <h2>Create Musician</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <input
                    type="text"
                    name="instrument"
                    value={formData.instrument}
                    onChange={handleChange}
                    placeholder="instrument"
                />
                <input
                    type="text"
                    name="musicianarea"
                    value={formData.musicianarea}
                    onChange={handleChange}
                    placeholder="Musicianarea"
                />
                <button type="submit">Create Musician</button>
                {error && <p style={{color: 'red'}}>{error}</p>} {/* Display error message */}
            </form>
        </div>
    );
}

export default MusicianForm;
