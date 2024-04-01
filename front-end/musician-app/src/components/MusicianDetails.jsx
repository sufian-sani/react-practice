// MusicianDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MusicianDetails() {
    const { musicianId } = useParams(); // Get musicianId from URL params
    const [musician, setMusician] = useState(null);
    const [error, setError] = useState(null);
    console.log(musicianId)
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

    return (
        <div>
            <h2>Musician Details</h2>
            <p>Name: {musician.name}</p>
            <p>instrument: {musician.instrument}</p>
            <span>Musician Area: </span>{musician.musicianArea}
            {/* Display other musician details as needed */}
        </div>
    );
}

export default MusicianDetails;
