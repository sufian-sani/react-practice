import React from 'react';

const ButtonElement = (props) => {
    return (
        <div>
            <button onClick={props.eventOperation}>{props.innerTextMessage}</button>
        </div>
    );
};

export default ButtonElement;