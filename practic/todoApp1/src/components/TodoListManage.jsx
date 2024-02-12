import React from 'react';
import ListElement from "../Element/ListElement.jsx";
import TodoAddButton from "./TodoAddButton.jsx";
import ButtonElement from "../Element/ButtonElement.jsx";

const TodoListManage = (props) => {
    return (
        <ul>
            {props.listItem.map((todo) => (
                <ListElement
                    key={todo.id}
                    text={todo.text}
                    removeButton={<ButtonElement eventOperation={()=>props.removeButtonComponents(todo.id)} innerHtmlText={'Remove'} />}
                    edithandler={<ButtonElement eventOperation={()=>props.edithandler(todo.id)} innerHtmlText={'Edit'} />}
                />
            ))}
        </ul>
    );
};

export default TodoListManage;