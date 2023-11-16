import { useEffect, useState } from "react";

const Useeffect1 = () => {
    let [data,setData]=useState();
    useEffect(()=>{
        fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(json => setData(json))
    },[])
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export default Useeffect1;