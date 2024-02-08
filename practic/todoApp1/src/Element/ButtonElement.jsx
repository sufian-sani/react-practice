import React from 'react';

const ButtonElement = (props) => {
    return (
        <button id="" onClick={props.eventOperation}>{props.innerHtmlText}</button>
    );
};

export default ButtonElement;