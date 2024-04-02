// AlbumList.js
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

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

    return (
        <div>
            <h2>Album List</h2>
            <ol>
                {albums.map(album => (
                    <li key={album.id}>
                        {/*<span>Name: {album.title}, </span>*/}
                        <Link to={`/albumdetails/${album.id}`}>{album.title}</Link>
                        <span>Release Year: {album.releaseYear}, </span>
                        <span>Musician Name: </span>{album.musician.name}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default AlbumList;
