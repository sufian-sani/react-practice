import React from 'react';

const InputElement = (props) => {
    return (
        <div>
            <input type={props.passItems.type} id="" name="" placeholder={props.passItems.placeholder} onChange={props.eventOperation} />
        </div>
    );
};

export default InputElement;