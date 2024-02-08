import React from 'react';
import ListElement from "../Element/ListElement.jsx";
import TodoAddButton from "./TodoAddButton.jsx";
import ButtonElement from "../Element/ButtonElement.jsx";

const TodoListManage = (props) => {
    return (
        <div>
            <ListElement listItem={props.listItem} removeButtonComponents={props.removeButtonComponents} />
        </div>
    );
};

export default TodoListManage;