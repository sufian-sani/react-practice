import React, {useState} from 'react';

function BgComponents() {
    const [color, setColor] = useState('olive')
    return (
        <div>
            <h1>Test Header</h1>
            <div style={{paddingTop: '2em', backgroundColor:color}}>
                Back Ground
            </div>
            <div>
                <button onClick={()=>{setColor('blue')}}>Blue</button>
                <button onClick={()=>{setColor('green')}}>Green</button>
                <button onClick={()=>{setColor('yellow')}}>Yellow</button>
            </div>
        </div>
    );
}

export default BgComponents;