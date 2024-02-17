import React from 'react';

const LabelElement = (props) => {
    return (
        <label htmlFor=""> {props.labelText}</label>
    );
};

export default LabelElement;