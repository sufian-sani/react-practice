import React from 'react';
import Com3 from './Com3';

const Com2 = (user) => {
    return (
        <div>
            <h1>Component 2</h1>
            <Com3 user={user} />
        </div>
    );
};

export default Com2;