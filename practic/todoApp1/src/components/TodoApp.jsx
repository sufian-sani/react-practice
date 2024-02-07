import React, {useState} from 'react';
import InputManage from "./InputManage.jsx";
import TodoAddButton from "./TodoAddButton.jsx";
import TodoListManage from "./TodoListManage.jsx";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const inputHandler = (e) => {
        setNewTodo(e.target.value)
    }

    const addTodoItem = () => {
        setTodos([...todos,newTodo])
        console.log(todos)
        setNewTodo('')
    }

    return (
        <div>
            <InputManage onChange={inputHandler} />
            <TodoAddButton onClick={addTodoItem} />
            <TodoListManage listItem={todos} />
        </div>
    );
};

export default TodoApp;