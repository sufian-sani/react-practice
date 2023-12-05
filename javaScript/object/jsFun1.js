// function square() {
//     number = 36
//     return number * number;
// }
//
//
// let fDataVal = square()
// console.log(typeof fDataVal)
// console.log(fDataVal)

// ---------------------------

// const x = function(number){
//     // number = 5699999
//     return number * number;
// }
//
// let fDataVal = x(8)
// console.log(typeof fDataVal)
// console.log(fDataVal)

// -----------------------------
// const x = function(number){
//     // number = 5699999
//     return number * number;
// }

// const x = (number) => {
//     // number = 5699999
//     return number * number;
// }
//
// let fDataVal = x(8)
// console.log(typeof fDataVal)
// console.log(fDataVal)

// ------------------------

// const apiData = myDisplay(y)
// fetch("https://dummyjson.com/products/1")
//     .then(x => x.text())
//     .then(y => myDisplay(y));

// let apiData = {}
// function getData() {
//     fetch("https://dummyjson.com/products/1")
//         .then(x => x.json())
//         .then(data => {
//             apiData = data
//         })
// }
//
// // const apiData = getData()
// console.log(apiData)
// ------------------------
// async function foo() {
//     await fetch("https://dummyjson.com/products/1");
//     // await console.log('fDataVal2');
//     console.log('test');
// }

// foo()
// console.log('fDataVal Out')
// const result = Promise foo();
// console.log(result)
// -------------------------
// let apiData = []
// // function foo() {
// //     fetch("https://dummyjson.com/products/1")
// //         .then(x => x.json())
// //         .then(data => apiData.push(data))
// // }
// // function mySecond() {
// //     console.log("Goodbye");
// // }
//
// const car = {type:"Fiat", model:"500", color:"white"};
//
// apiData.push(car)
//
// // setTimeout(myData, 1000);
// // setTimeout(myFirst, 3000);
// function myData() {
//     console.log(apiData)
// }
// myData()
// --------------------------------------
// let apiData = []
//
// function myPrint(data){
//     apiData.push(data)
//     // console.log(data)
// }
//
// async function foo() {
//     await fetch("https://dummyjson.com/products/1")
//     .then(x => x.json())
//     .then(data => myPrint(data))
// }
//
// foo()
// console.log(apiData)
