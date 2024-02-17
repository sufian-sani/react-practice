import React from 'react';
import ButtonElement from "../Element/ButtonElement.jsx";

const DecrementButton = (props) => {
    return (
        <div>
            <ButtonElement innerTextMessage={'Decrement'} eventOperation={props.onClick} />
        </div>
    );
};

export default DecrementButton;