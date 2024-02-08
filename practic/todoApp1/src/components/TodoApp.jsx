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
            console.log(todos)
        }
    }

    const removeItem = () => {
        // setTodos(todos.filter((todo) => todo.id !== todoId))
        // const updatedItems = [...todos];
        // updatedItems.pop();
        // setTodos(updatedItems);
        console.log('removeItem')
    }

    return (
        <div>
            <InputManage onChange={inputHandler} initialVal={newTodo} />
            <TodoAddButton onClick={addTodoItem} />
            <TodoListManage listItem={todos} removeButtonComponents={<TodoRemoveButton onClick={removeItem} />}/>
        </div>
    );
};

export default TodoApp;