import React from 'react';
import Com4 from './Com4';

const Com3 = (user) => {
    return (
        <div>
            <h1>Component 3</h1>
            <Com4 user={user} />
        </div>
    );
};

export default Com3;