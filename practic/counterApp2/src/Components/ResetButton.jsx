import React from 'react';
import ButtonElement from "../Element/ButtonElement.jsx";

const ResetButton = (props) => {
    return (
        <div>
            <ButtonElement innerTextMessage={'Reset'} eventOperation={props.onClick} />
        </div>
    );
};

export default ResetButton;