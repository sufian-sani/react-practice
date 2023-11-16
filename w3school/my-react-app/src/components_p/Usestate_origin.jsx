// import React, { useState } from 'react';

// const Usestate = () => {
//     const [color, setColor] = useState('red')
//     return (
//         <div>
//             <h1>My favorite color is {color}!</h1>
//             <button onClick={()=>setColor('blue')} >blue</button>
//         </div>
//     );
// };

// export default Usestate;


import React, { useEffect, useState } from 'react';

const Usestate = () => {

    const [test, setTest] = useState(true);

    const [car, setCar] = useState({});

    // console.log(test);

    let barndOne= {
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    }
    let barndTwo = {
            brand: "tyota",
            model: "tyota axio",
            year: "2016",
            color: "White"
    }
    

    useEffect( () => {
        // if(!e.clicked){
        //     console.log('yes')
        // }else{
        //     console.log('none')
        // }
        console.log('open');
        if(test === true) {
            console.log('true');
            setCar(barndOne);
           
        }else{
            console.log('false');
            setCar(barndTwo)
        }

    },[test])


    return (
        <div>
            <h1><i>Car information: </i></h1>
            <h1>{car.brand}</h1>
            <h1>{car.model}</h1>
            <h1>{car.year}</h1>
            <h1>{car.color}</h1>
            <button onClick={() =>setTest(!test)}>Change information</button>
        </div>
    );
};

export default Usestate;