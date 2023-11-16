// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   });

//   return <h1>I've rendered {count} times!</h1>;
// }

// export default Timer;

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function Timer() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]); // <- add the count variable here

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );
// }

// export default Timer;

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 5);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

export default Timer;