import React from 'react';
import ListElement from "../Element/ListElement.jsx";
import TodoAddButton from "./TodoAddButton.jsx";
import ButtonElement from "../Element/ButtonElement.jsx";
import EnableDisableManager from "./EnableDisableManager.jsx";

const TodoListManage = (props) => {
    return (
        <ul>
            {props.listItem.map((todo) => (
                <ListElement
                    key={todo.id}
                    text={todo.text}
                    removeButton={<ButtonElement eventOperation={()=>props.removeButtonComponents(todo.id)} innerHtmlText={'Remove'} actionStatus={todo.isDisable?true:false} />}
                    edithandler={<ButtonElement eventOperation={()=>props.edithandler(todo.id)} innerHtmlText={'Edit'} actionStatus={todo.isDisable?true:false} />}
                    enableDisableButton={<EnableDisableManager disablehandler={()=>props.disablehandler(todo.id)} status={todo.isDisable} />}
                    className={`${todo.isDisable?'text-decoration-line-through':''}`}
                />
            ))}
        </ul>
    );
};

export default TodoListManage;