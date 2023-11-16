// import React from 'react';
// import { useState, useEffect, useRef } from "react";

// const Useref1 = () => {
//     const [inputValue, setInputValue] = useState("");
//     const count = useRef(0);

//     useEffect(() => {
//         count.current = count.current + 1;
//       });

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//             />
//             <h1>Render Count: {count.current}</h1>
//         </div>
//     );
// };

// export default Useref1;

import React, { useEffect, useRef, useState } from 'react';

const Useref1 = () => {
    const [inputVal, setInputVal ] = useState("");
    // const [characterCount, setCharacterCount] = useState(0);
    const count = useRef(0)

    // const handleInputChange = (e) => {
    //     const value = e.target.value;
    //     setInputVal(value);
    //     // setCharacterCount(value.length);
    // }
    useEffect(()=>{
        count.current = count.current + 1;
        console.log('count.current',count.current);
    })
    // console.log(count)

    return (
        <div>
            <input 
                type="text"
                value={inputVal}
                onChange={(e)=>setInputVal(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
        </div>
    );
};

export default Useref1;