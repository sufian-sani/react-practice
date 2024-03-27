// AlbumList.js
import React, { useState, useEffect } from 'react';

function AlbumList({ musician }) {
    const [albums, setAlbums] = useState([]);

    // Fetch data from the API on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/albums'); // Replace with your API endpoint
                // console.log(response)
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }
                const fetchedData = await response.json();
                setAlbums(fetchedData);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchData();
    }, []);

    console.log(albums)

    return (
        <div>
            <h2>Album List</h2>
            <ol>
                {albums.map(album => (
                    <li key={album.id}>
                        <span>Name: {album.title}, </span>
                        <span>Release Year: {album.releaseYear}, </span>
                        <span>Musician Id: </span>{album.musicianId}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default AlbumList;
