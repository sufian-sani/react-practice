import React from 'react';
import { useRef } from 'react';

const Useref = () => {
    let myHeadLine=useRef();
    const change = () => {
        myHeadLine.innerHTML="<ul><li>A</li><li>B</li></ul>"
    }
    return (
        <div>
            <h1 ref={(h1)=>myHeadLine=h1}>Sample</h1>
            <button onClick={change}>Click</button>
        </div>
    );
};

export default Useref;