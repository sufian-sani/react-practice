// const vehicles = ['mustang', 'f-150', 'expedition'];

// // old way
// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];

// console.log(car)

// const vehicles = ['mustang', 'f-150', 'expedition'];

// const [car, truck, suv] = vehicles;

// console.log(truck)

// const vehicles = ['mustang', 'f-150', 'expedition'];

// const [car,, suv] = vehicles;

// console.log(vehicles)

// function calculate(a, b) {
//     const add = a + b;
//     const subtract = a - b;
//     const multiply = a * b;
//     const divide = a / b;
  
//     return [add, subtract, multiply, divide];
//   }
  
// const [add, subtract, multiply, divide] = calculate(4, 7);

// console.log(divide)

// const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021, 
//     color: 'red'
//   }
  
// myVehicle(vehicleOne);
  
//   // old way
// function myVehicle(vehicle) {
//     const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
//     console.log(vehicle)
// }

const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
  console.log(message)
}

