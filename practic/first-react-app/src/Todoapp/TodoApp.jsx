// TodoApp.js
import React, { useState } from 'react';
import TodoList from './TodoList';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');


    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const toggleTodo = (todoId) => {
        setTodos(
            todos.map((todo) =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (todoId) => {
        setTodos(todos.filter((todo) => todo.id !== todoId));
    };

    return (
        <div>
            <h2>Todo App</h2>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={addTodo}>Add Todo</button>
            <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        </div>
    );
};

export default TodoApp;
