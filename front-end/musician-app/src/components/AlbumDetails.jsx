// AlbumDetails.js
import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';

function AlbumDetails() {
    const { albumId } = useParams(); // Get albumId from URL params
    const [album, setAlbum] = useState(null);
    const [error, setError] = useState(null);

    const [musicianDetails, setMusicianDetails] = useState(null);

    useEffect(() => {
        const fetchAlbumDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/albums/${albumId}`); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch album details');
                }
                const data = await response.json();
                if(data.musicianId){
                    const musicianResponse = await fetch(`http://localhost:3000/api/musicians/${data.musicianId}`);
                    if (!musicianResponse.ok) {
                        throw new Error('Failed to fetch musician details');
                    }
                    const musicianData = await musicianResponse.json();
                    setMusicianDetails(musicianData); // Set musician details in state
                }
                setAlbum(data); // Set album details in state

                // Fetch musician details using musicianId from the album
                // console.log(data.musicianId)


            } catch (error) {
                console.error('Fetch album details error:', error);
                setError('Failed to fetch album details. Please try again.'); // Set error message
            }
        };

        fetchAlbumDetails();
    }, [albumId]); // Fetch album details when albumId changes

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/albums/${albumId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete album');
            }
            // Redirect to the albums list page or a different page
        } catch (error) {
            console.error('Delete album error:', error);
            setError('Failed to delete album. Please try again.');
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!album) {
        return <div>Loading...</div>;
    }

    // console.log(musicianDetails.id)

    return (
        <div>
            <h2>Album Details</h2>
            <p>Title: {album.title}</p>
            <p>Release Year: {album.releaseYear}</p>
            <h2>Musician Details: </h2>
            {musicianDetails.name && <p>Name: {musicianDetails.name}</p>}
            {musicianDetails.instrument && <p>instrument: {musicianDetails.instrument}</p>}
            {musicianDetails.musicianArea && <p>Area: {musicianDetails.musicianArea}</p>}
            {/*<p>Musician Name: {musicianDetails.name}</p>*/}
            {/*<p>Musician instrument: {musicianDetails.instrument}</p>*/}
            {/*<p>Musician Area: {musicianDetails.musicianArea}</p>*/}
            <br/>
            <Link to={`/album/${albumId}/update`}><button>Update Album</button></Link>
            <button onClick={handleDelete}>Delete Album</button>
        </div>
    );
}

export default AlbumDetails;
