import React, {useEffect, useState} from 'react';

function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomColorUtility(length){
        return Math.floor(Math.random()*length)
    }
    function handleCreateRandomHexColor() {
        const hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
        let hexColor = "#"

        for(let i=0;i<6;i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor);
    }
    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(() => {
        if(typeOfColor === "rgb") handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    }, [typeOfColor]);
    
    return (
        <div
            style={{
                width:"100vw",
                height: "100vh",
                background: color,
            }}
        >
            <button onClick={()=>setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={()=>setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor }>Generate Random Color</button>
            <div>
                <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
}

export default RandomColor;