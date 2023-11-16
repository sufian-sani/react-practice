import React from 'react';

const Todos = ({ todos, addTodo }) => {
    console.log('test');
    return (
        <div>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
};

export default Todos;