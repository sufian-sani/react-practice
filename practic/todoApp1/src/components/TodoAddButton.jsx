import React from 'react';
import ButtonElement from "../Element/ButtonElement.jsx";

const TodoAddButton = (props) => {
    return (
        <ButtonElement innerHtmlText={props.editToggole?'Edit Todo':'Add Todo'} eventOperation={props.onClick} />
    );
};

export default TodoAddButton;