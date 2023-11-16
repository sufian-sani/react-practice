import React from 'react';
import { useState } from "react";
import Todos from './Todos';

const Usecallback3 = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        // console.log('test');
        setCount((c) => c + 1);
    };

    const addTodo = () => {
        // console.log('test');
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
};

export default Usecallback3;