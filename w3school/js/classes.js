// class Car {
//     constructor(name) {
//       this.brand = name;
//     }
//   }

// const mycar = new Car("Ford");


// console.log(mycar.brand)

// class Car {
//     constructor(name) {
//       this.brand = name;
//     }
    
//     present() {
//       return 'I have a ' + this.brand;
//     }
//   }
  
// const mycar = new Car("Ford");
// // mycar.present();

// console.log(mycar.present())

class Car {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return 'I have a ' + this.brand;
    }
  }
  
class Model extends Car {
constructor(name, mod) {
    super(name);
    this.model = mod;
}  
show() {
    return this.present() + ', it is a ' + this.model
}
}
const mycar = new Model("Ford", "Mustang");
// mycar.show();

console.log(mycar.show())