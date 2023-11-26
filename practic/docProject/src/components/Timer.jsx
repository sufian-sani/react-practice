import React from 'react';

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
// }
function Timer(props) {
    console.log(props)
    return <h1>Hello, {props.name} {props.name2}</h1>;
}

export default Timer;