// Counter.js
import React, { useState } from 'react';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import ResetButton from './ResetButton';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <IncrementButton onClick={increment} />
            <DecrementButton onClick={decrement} />
            <ResetButton onClick={reset} />
        </div>
    );
};

export default Counter;
