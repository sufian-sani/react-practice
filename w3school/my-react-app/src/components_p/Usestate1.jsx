import React, { useState } from 'react';

const Usestate1 = () => {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });

      const updateColor = () => {
        setCar(previousState => {
            console.log(previousState)
            return {...previousState, color: "blue"}
        });
      }

    return (
        <div>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button onClick={updateColor}>Blue</button>
        </div>
    );
};

export default Usestate1;