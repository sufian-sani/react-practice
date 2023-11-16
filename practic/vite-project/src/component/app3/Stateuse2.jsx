import React, { useState } from 'react';

const Stateuse2 = () => {
    const [myObj, setMyObj]=useState({
        key1:"Value 1",
        key2:"Value 2",
        key3:"Value 3",
    })

    const change = () => {
        setMyObj(
            prevOBJ=>({
                ...prevOBJ,
                key1:"New Value For Key 1",
                key2:"New Value For Key 2",
            })
        )
    }

    return (
        <div>
            <h1>{myObj.key1}</h1>
            <h1>{myObj.key2}</h1>
            <button onClick={change}>Click</button>
        </div>
    );
};

export default Stateuse2;