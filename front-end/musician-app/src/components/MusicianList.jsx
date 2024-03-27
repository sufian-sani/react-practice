// MusicianList.js
import React, { useState, useEffect } from 'react';

function MusicianList({ onSelect }) {
    const [musicians, setMusicians] = useState([]);

    // Fetch data from the API on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/musicians'); // Replace with your API endpoint
                // console.log(response)
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }
                const fetchedData = await response.json();
                setMusicians(fetchedData);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Musician List</h2>
            <ol>
                {musicians.map(musician => (
                    <li key={musician.id}>
                        <span>Name: {musician.name}, </span>
                        <span>instrument: {musician.instrument}, </span>
                        <span>Area: </span>{musician.musicianArea}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default MusicianList;
