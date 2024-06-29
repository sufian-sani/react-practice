import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AlbumUpdateForm(props) {
    const { albumId } = useParams(); // Get albumId from URL params
    const [musicians, setMusicians] = useState([]); // State to store the list of musicians

    const [formData, setFormData] = useState({
        title: '',
        releaseYear: '',
        musicianId: ''
    });
    const [error, setError] = useState(null);

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

    useEffect(() => {

        const fetchMusicianDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/albums/${albumId}`); // Replace with your API endpoint
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
        // Fetch the list of musicians when the component mounts
        fetchMusicians();
    }, [albumId]);

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
            const response = await fetch(`http://localhost:3000/api/albums/${albumId}`, {
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
            console.error('Update album details error:', error);
            setError('Failed to update album details. Please try again.');
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Update Album</h2>
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
                <button type="submit">Update Album</button>
                {error && <p style={{color: 'red'}}>{error}</p>} {/* Display error message */}
            </form>
        </div>
    );
}

export default AlbumUpdateForm;