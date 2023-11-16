import React, { useState,useEffect } from 'react';

const Useeffect2 = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setCount((count)=>count+1);
        })
    },[]);

    return (
        <div>
            <h1>I have rendered {count} times!</h1>
        </div>
    );
};

export default Useeffect2;