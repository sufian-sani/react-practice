import React, {useState} from 'react';

function Counter() {
    const [counter, setCounter] = useState(0)
    console.log(counter)
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Count+1</button>
            <button onClick={() => setCounter(prevCounter => prevCounter + 5)}>Count+5</button>
            <br/>
            <button onClick={() => setCounter(prevCounter => prevCounter - 1)}>Count-1</button>
            <button onClick={() => setCounter(prevCounter => prevCounter - 5)}>Count-5</button>
        </div>
    );
}

export default Counter;