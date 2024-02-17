import React from 'react';
import ButtonElement from "../Element/ButtonElement.jsx";

const IncrementButton = (props) => {
    return (
        <div>
            <ButtonElement innerTextMessage={'Increments'} eventOperation={props.onClick} />
        </div>
    );
};

export default IncrementButton;