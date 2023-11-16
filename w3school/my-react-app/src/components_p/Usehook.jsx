import React, { useState } from 'react';

const Usehook = () => {
    const [color, setColor] = useState('red')
    let objectVal = 'Petya';
    return (
        <>
            <h1>Set Color: {color}</h1>
            <button onClick={() => setColor('black')}>black</button>
            <button onClick={() => setColor('Green')}>Green</button>
            <button onClick={() => setColor('yello')}>yello</button>
            <button onClick={() => setColor(objectVal)}>long value</button>
        </>
    );
};

export default Usehook;