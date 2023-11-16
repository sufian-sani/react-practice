import React, { useReducer } from 'react';

const reducer = (state, action) => {
    if(action.type==='increment'){
        return state+1;
    }
    if(action.type==='decrement'){
        return state-3;
    }
    if(action.type==='exincrement'){
        return state+5;
    }
    return state;
} 

const Usereducer1 = () => {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h1>Count {state}</h1>
            <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
            <button onClick={()=>dispatch({type:"exincrement"})}>Extra Increment</button>
        </div>
    );
};

export default Usereducer1;