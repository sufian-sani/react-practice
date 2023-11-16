import { useEffect, useState } from 'react';

const Useeffect2 = () => {

    let [data,setData]=useState();

    useEffect(()=>{
        (async()=>{
            let response=await fetch('https://dummyjson.com/products/2')
            let json=await response.json()
            setData(json)
        })()
    },[])
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export default Useeffect2;