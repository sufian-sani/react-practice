import React from 'react';
import { useState, useEffect } from 'react';

const Useeffect3 = () => {
    const [count, setCount] = useState(0);
    const [calculator, setCalculator] = useState(0);

    useEffect(() => {
        setCalculator(()=>count*2);
    },[count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={(count) => setCount((count)=> count+1)}>+</button>
            <p>Calculation: {calculator}</p>
        </div>
    );
};

export default Useeffect3;