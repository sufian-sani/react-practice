import React, { useRef } from 'react';

const Useref5 = () => {
    let number=useRef(0);
    const change = () => {
        number.current++;
        console.log(number.current);
    }
    return (
        <div>
            <button onClick={change}>Click</button>
        </div>
    );
};

export default Useref5;