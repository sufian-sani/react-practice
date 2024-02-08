import React from 'react';
import ButtonElement from "./ButtonElement.jsx";
const ListElement = (props) => {
    const todoIs = (id) => {
        console.log(id)
    }
    return (
        <ul>
            {props.listItem.map((todo,index) => (
                <li key={index} onClick={todoIs(todo.id)}>{todo.text} {props.removeButtonComponents}</li>
            ))}
        </ul>
    );
};

export default ListElement;