import React from 'react';

const InputSection = ({handleOnChange}) => {
    return (
        <input
            type="text"
            placeholder="Enter Food Item here"
            onChange={handleOnChange}
        />
    );
};

export default InputSection;