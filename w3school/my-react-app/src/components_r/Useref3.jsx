import React, { useRef } from 'react';

const Useref3 = () => {
    const inputElement = useRef();
    const focusInput = () => {
        inputElement.current.focus()
    }
    return (
        <div>
            <input 
                type='text'
                ref = {inputElement}
            />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
};

export default Useref3;