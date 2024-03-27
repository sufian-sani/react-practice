import React, { useState } from 'react';
import MusicianList from './MusicianList';
import AlbumList from './AlbumList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const [selectedMusician, setSelectedMusician] = useState(null);

    const handleSelectMusician = (musician) => {
        setSelectedMusician(musician);
    };

    return (
        <div className="App">
            <h1>Musician Album Index</h1>
            <div className="content">
                <div className="sidebar">
                    <MusicianList onSelect={handleSelectMusician} />
                </div>
                {/*<div className="main">*/}
                {/*    {selectedMusician && <AlbumList musician={selectedMusician} />}*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default App;
