import React from 'react';

const ButtonElement = (props) => {
    return (
        <button id="" onClick={props.eventOperation} className="btn btn-primary mt-3">{props.innerHtmlText}</button>
    );
};

export default ButtonElement;