import React, { useEffect, useState } from 'react';

const Useeffect4 = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        let timer = setTimeout(() =>{
            setCount((count)=>count+1);
        },1000)
        return () => clearTimeout(timer)
    },[]);

    return (
        <div>
            <h1>I have rendered {count} times!</h1>
        </div>
    );
};

export default Useeffect4;