import React, { useRef } from 'react';

const Useref6 = () => {
    let APIData=useRef(null);
    let myPTag=useRef();

    const fetchData = async () => {
        const response=await fetch("https://dummyjson.com/products/1")
        APIData.current=await response.json()
    }
    const showData = () => {
        myPTag.current.innerText=JSON.stringify(APIData.current)
    }
    return (
        <div>
            <p ref={myPTag}></p>
            <button onClick={fetchData}>Call API</button>
            <button onClick={showData}>Show Data</button>
        </div>
    );
};

export default Useref6;