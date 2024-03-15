import React, {useState} from 'react';
import './style.css'
function ColorGenerate() {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [hexColorGen, setHexColorGen] = useState("#FFFFFF")
    const [rgbColorGen, setRgbColorGen] = useState("rgb(255, 255, 255)")

    function hexColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        setHexColorGen(color)
        setTypeOfColor('hex')
    }

    function rgbColor() {
        const getRandomValue = () => Math.floor(Math.random() * 256);
        const red = getRandomValue();
        const green = getRandomValue();
        const blue = getRandomValue();

        let valueColor = `rgb(${red}, ${green}, ${blue})`;
        setRgbColorGen(valueColor)
        setTypeOfColor('rgb')
    }

    return (
        <div>
            <button onClick={hexColor}>HEX Color</button>
            <button onClick={rgbColor}>RGB Color</button>
            <div
                className="working-field"
                style={{background : typeOfColor==='hex'?hexColorGen:rgbColorGen}}
            ></div>
        </div>
    );
}

export default ColorGenerate;