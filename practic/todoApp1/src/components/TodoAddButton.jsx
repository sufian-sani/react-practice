import React from 'react';
import ButtonElement from "../Element/ButtonElement.jsx";

const TodoAddButton = (props) => {
    return (
        <div>
            <ButtonElement innerHtmlText='Add Todo' eventOperation={props.onClick} />
        </div>
    );
};

export default TodoAddButton;