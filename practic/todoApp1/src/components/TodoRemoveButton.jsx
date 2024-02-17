import React from 'react';
import ButtonElement from "../Element/ButtonElement.jsx";

const TodoRemoveButton = (props) => {
    return (
        <ButtonElement innerHtmlText={'Remove'} eventOperation={props.onClick} />
    );
};

export default TodoRemoveButton;