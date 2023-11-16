import React, { useState } from 'react';

const Com5 = (user) => {
    console.log(user.user.user.user.user);
    return (
        <div>
            <h1>Component 5</h1>
            <h2>{`Hello ${user.user.user.user.user} again!`}</h2>
        </div>
    );
};

export default Com5;