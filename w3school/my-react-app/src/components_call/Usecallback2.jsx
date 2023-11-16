import React from 'react';
import { useState, useCallback, useMemo } from 'react';
import Title from './Title';
import ShowCount from './ShowCount';
import Button from './Button';

const Usecallback2 = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = useCallback(()=>{
        setCount1((prevCount)=> prevCount+1);
    },[]);
    const incrementByFive = useCallback(()=>{
        setCount2((prevCount)=> prevCount+5);
    },[]);

    const inEvenOrOdd = useMemo(() => {
        let i = 0;
        while (i < 1000000000) i += 1; // costly operation
        return count1 % 2 === 0;
    },[count1]);

    return (
        <div>
            <Title />
            <ShowCount count={count1} title="Counter 1" />
            <span>{inEvenOrOdd ? 'Even' : 'Odd'}</span>
            <Button handleClick={incrementByOne}>Increment by one</Button>
            <hr />
            <ShowCount count={count2} title="Counter 2" />
            <Button handleClick={incrementByFive}>Increment by five</Button>
        </div>
    );
};

export default Usecallback2;