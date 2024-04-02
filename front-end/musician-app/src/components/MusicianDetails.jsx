// MusicianDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MusicianUpdateForm from "./MusicianUpdateForm.jsx";

function MusicianDetails() {
    const { musicianId } = useParams(); // Get musicianId from URL params
    const [musician, setMusician] = useState(null);
    const [error, setError] = useState(null);
    // console.log(musicianId)
    useEffect(() => {
        const fetchMusicianDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/musicians/${musicianId}`); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch musician details');
                }
                const data = await response.json();
                setMusician(data); // Set musician details in state
            } catch (error) {
                console.error('Fetch musician details error:', error);
                setError('Failed to fetch musician details. Please try again.'); // Set error message
            }
        };

        fetchMusicianDetails();
    }, [musicianId]); // Fetch musician details when musicianId changes

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!musician) {
        return <div>Loading...</div>;
    }

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/musicians/${musicianId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete musician');
            }
            // Handle successful deletion (e.g., navigate to a different page)
        } catch (error) {
            console.error('Delete musician error:', error);
            // Handle error (e.g., display error message)
        }
    };

    return (
        <div>
            <h2>Musician Details</h2>
            <p>Name: {musician.name}</p>
            <p>instrument: {musician.instrument}</p>
            <span>Musician Area: </span>{musician.musicianArea}
            {/* Display other musician details as needed */}
            <br />
            {/*<MusicianUpdateForm musician={musician} />*/}
            <Link to={`/musician/${musicianId}/update`}>Update Musician</Link>
            <button onClick={handleDelete}>Delete Musician</button>
            {/*<MusicianUpdateForm musician={musician} />*/}
        </div>
    );
}

export default MusicianDetails;
