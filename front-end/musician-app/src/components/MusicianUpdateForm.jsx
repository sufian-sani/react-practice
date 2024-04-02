// MusicianForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MusicianUpdateForm({ musician }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: musician.name,
        instrument: musician.instrument
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
            const response = await fetch(`http://localhost:3000/api/musicians/${musician.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to update musician details');
            }
            // Redirect to the musician details page or a different page
            navigate(`/musicians/${musician.id}`);
        } catch (error) {
            console.error('Update musician details error:', error);
            setError('Failed to update musician details. Please try again.');
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Update Musician</h2>
            {/*<form onSubmit={handleSubmit}>*/}
            {/*    <div>*/}
            {/*        <label>Name:</label>*/}
            {/*        <input type="text" name="name" value={formData.name} onChange={handleChange} />*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <label>Genre:</label>*/}
            {/*        <input type="text" name="genre" value={formData.genre} onChange={handleChange} />*/}
            {/*    </div>*/}
            {/*    <button type="submit">Update Musician</button>*/}
            {/*</form>*/}
        </div>
    );
}

export default MusicianUpdateForm;
