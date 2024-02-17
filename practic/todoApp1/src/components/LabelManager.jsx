import React from 'react';
import LabelElement from "../Element/LabelElement.jsx";

const LabelManager = (props) => {
    return (
        <LabelElement
            labelText ={props.labelText}
        />
    );
};

export default LabelManager;