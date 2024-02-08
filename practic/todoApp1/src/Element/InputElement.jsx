import React from 'react';

const InputElement = (props) => {
    return (
        <input type={props.passItems.type} id="" name="" placeholder={props.passItems.placeholder} onChange={props.eventOperation} value={props.initialVal} />
    );
};

export default InputElement;