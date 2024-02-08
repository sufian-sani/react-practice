import React from 'react';
import ButtonElement from "./ButtonElement.jsx";
const ListElement = (props) => {
    return (
        <ul>
            {props.listItem.map((todo,index) => (
                <li key={index}>{todo.text} {props.removeButtonComponents}</li>
            ))}
        </ul>
    );
};

export default ListElement;