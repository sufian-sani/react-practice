import React from 'react';
import ListElement from "../Element/ListElement.jsx";

const TodoListManage = (props) => {
    return (
        <div>
            <ListElement listItem={props.listItem}  />
        </div>
    );
};

export default TodoListManage;