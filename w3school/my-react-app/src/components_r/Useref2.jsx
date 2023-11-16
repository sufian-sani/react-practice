import React, { useEffect, useRef, useState } from 'react';

const Useref2 = () => {
    const [inputVal, setInputVal] = useState("")
    const previousVal = useRef("")

    useEffect(()=>{
        previousVal.current=inputVal;
    },[inputVal])

    return (
        <div>
            <input 
                type='text'
                onChange={(e)=> setInputVal(e.target.value)}
                // ref={previousVal}
            />
            <h1>Current Value: {inputVal}</h1>
            <h1>Previous Value: {previousVal.current}</h1>
        </div>
    );
};

export default Useref2;