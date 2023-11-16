import React, { useState } from 'react';
import Com5 from './Com5';

const Com4 = (user) => {
    return (
        <div>
            <h1>Component 4</h1>
            <Com5 user={user}/>
        </div>
    );
};

export default Com4;