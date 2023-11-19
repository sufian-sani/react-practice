import { useState } from 'react';
import { useEffect } from 'react';

export default function MyComponents(){
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    const [text, setText] = useState('');

    const tick = () => {
        setDate(new Date());
    };

    useEffect(()=>{
        console.log('update document title');
        document.title = `Clicked ${count} times`;
    },[count])

    const addClick = () => {
        setCount((prevCount) => prevCount+1)
    };

    useEffect(()=>{
        setInterval(tick, 1000)
    },[])

    return(
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <input type='text' value={text} onChange={(e)=>setText(e.target.value)} />
            </p>
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    )

}