


const domContainer = document.querySelector("#root");

// const myElement = React.createElement("div",null,[
//         React.createElement("p",null,"Hello World"),
//         React.createElement("p",null,"Hello World"),
//     ]);

// ReactDOM.render(myElement, domContainer);

// import React from 'react';
// import Increment from './Increment';

const Increment = () => {
    const [count, setCount] = React.useState(0);
    // console.log(reactState);
    return (
        <div>
            <h1 id="display">{count}</h1>
            <div>
                <button id="button" onClick={()=>setCount(count+1)}>Increment +</button>
            </div>
        </div>
    );
};

// export default Increment;

ReactDOM.render(
    <div>
        <Increment />
        <Increment />
        <Increment />
        <Increment />
    </div>, 
    domContainer)
    ;