// MusicianForm.js
import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function MusicianUpdateForm() {
    const { musicianId } = useParams()

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        instrument: '',
        musicianArea: ''
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMusicianDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/musicians/${musicianId}`); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch musician details');
                }
                const data = await response.json();
                setFormData(data); // Set musician details in state
            } catch (error) {
                console.error('Fetch musician details error:', error);
                setError('Failed to fetch musician details. Please try again.'); // Set error message
            }
        };

        fetchMusicianDetails();
    }, [musicianId]); // Fetch musician details when musicianId changes


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
            const response = await fetch(`http://localhost:3000/api/musicians/${musicianId}`, {
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
            // navigate(`/musicians/${musicianId}`);
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
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                </div>
                <div>
                    <label>Instrument:</label>
                    <input type="text" name="instrument" value={formData.instrument} onChange={handleChange}/>
                </div>
                <div>
                    <label>Musician Area:</label>
                    <input type="text" name="musicianArea" value={formData.musicianArea} onChange={handleChange}/>
                </div>
                <button type="submit">Update Musician</button>
            </form>
        </div>
    );
}

export default MusicianUpdateForm;
