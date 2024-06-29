// AlbumForm.js
import React, { useState, useEffect } from 'react';

function AlbumForm() {
    const [formData, setFormData] = useState({
        title: '',
        releaseYear: '',
        musicianId: '' // Add a new state to store the selected musician ID
    });
    const [musicians, setMusicians] = useState([]); // State to store the list of musicians
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the list of musicians when the component mounts
        fetchMusicians();
    }, []);

    const fetchMusicians = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/musicians/'); // Replace with your API endpoint
            if (!response.ok) {
                throw new Error('Failed to fetch musicians');
            }
            const data = await response.json();
            setMusicians(data); // Update state with the list of musicians
        } catch (error) {
            console.error('Fetch musicians error:', error);
        }
    };

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
            const response = await fetch('http://localhost:3000/api/albums/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to create album');
            }
            // Album created successfully, handle success (e.g., display success message)
        } catch (error) {
            console.error('Create album error:', error);
            setError('Failed to create album. Please try again.'); // Set error message
        }
    };

    return (
        <div>
            <h2>Create Album</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                <input
                    type="date"
                    name="releaseYear"
                    value={formData.releaseYear}
                    onChange={handleChange}
                    placeholder="Release Year"
                />
                <select name="musicianId" onChange={handleChange} value={formData.musicianId}>
                    <option value="">Select Musician</option>
                    {musicians.map(musician => (
                        <option key={musician.id} value={musician.id}>{musician.name}</option>
                    ))}
                </select>
                <button type="submit">Create Album</button>
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
            </form>
        </div>
    );
}

export default AlbumForm;
