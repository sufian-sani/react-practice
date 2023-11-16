import React from 'react';
import { useRef } from 'react';


const Useref2 = () => {

    let myImg=useRef()

    const change = () => {
        myImg.current.src="https://placehold.co/600x400";
        myImg.current.setAttribute('height','200px')
        myImg.current.setAttribute('width','300px')
    }

    return (
        <div>
            <img ref={myImg} src="https://placehold.co/600x400/000000/FFF"/>
            <button onClick={change}>Click</button>
        </div>
    );
};

export default Useref2;