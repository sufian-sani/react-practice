import React, {useState} from 'react';
import InputManage from "./InputManage.jsx";
import TodoAddButton from "./TodoAddButton.jsx";
import TodoListManage from "./TodoListManage.jsx";
import TodoRemoveButton from "./TodoRemoveButton.jsx";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const inputHandler = (e) => {
        setNewTodo(e.target.value)
    }

    const addTodoItem = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos,{ id: Date.now(), text: newTodo}]);
            setNewTodo('');
            // console.log(todos)
        }
    }

    const removeItem = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <div>
            <div className="">
                <InputManage onChange={inputHandler} initialVal={newTodo} />
                <TodoAddButton onClick={addTodoItem} />
            </div>
            <TodoListManage listItem={todos} removeButtonComponents={removeItem} />
        </div>
    );
};

export default TodoApp;