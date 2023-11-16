// import React, { useState } from 'react';

// const Usecallback1 = () => {
//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState([]);
//     const increment = () => {
//         setCount((c)=>c+1);
//         console.log('count');
//     }
//     const addTodo = () => {
//         setTodos((t)=>[...t,"New Todo"]);
//         console.log('addTodo');
//     }
//     return (
//         <div>
//             <div>
//                 <h1>My Todos:</h1>
//                 <ul>
//                     {todos.map((task, index) => (
//                         <li key={index}>{task}</li>
//                     ))}
//                 </ul>
//                 <button onClick={addTodo}>Add Todo</button>
//             </div>
//             <p>----------------------------------------------------------------</p>
//             <div>
//                 <h1>Count: {count}</h1>
//                 <button onClick={increment}>+</button>
//             </div>
//         </div>
//     );
// };

// export default Usecallback1;

import React,{ useState } from 'react';
import Todos from './Todos';


const Usecallback1 = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
      const addTodo = () => {
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

export default Usecallback1;