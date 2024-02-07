import React from 'react';

const ButtonElement = (props) => {
    return (
        <div>
            <button id="" onClick={props.eventOperation}>{props.innerHtmlText}</button>
        </div>
    );
};

export default ButtonElement;