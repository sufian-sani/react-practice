import React, { useState } from 'react';
import Com2 from './Com2';

const Usecontext1 = () => {
    const [user, setUser] = useState("Jesse Hall");
    return (
        <div>
            <h1>{`Hello ${user}!`}</h1>
            <Com2 user={user} />
        </div>
    );
};

export default Usecontext1;