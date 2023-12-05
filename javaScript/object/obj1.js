// const currencyCall = (currency) => {
//     console.log(currency)
//     fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res) => {
//             return res.json()
//         })
//         // return res.json();
//         // .then((res) => {
//         //     res
//         //     // console.log(res)
//         //     // let parsedData = JSON.parse(res)
//         //     // return res;
//         // })
//     // return res;
//     // console.log(res)
// }
//
// let currency = 'usd'
// let cData = currencyCall(currency)
//
// console.log(cData)

// ------------------------


// function callApi() {
//     console.log('treetete')
//     // code to be executed
//     fetch('https://dummyjson.com/products/1')
//         .then(res => res.json())
//         .then(json => {
//             console.log('test')
//             return json;
//         })
//
// }
//
// const productsList = callApi()
// console.log(productsList)

// --------------------------
// async function logMovies() {
//     const response = await fetch("https://dummyjson.com/products/1");
//     const movies = await response.json();
//     return movies;
// }
//
// const productsList = logMovies()
// console.log(productsList)

// ---------------------------------------

// Example POST method implementation:
// async function postData() {
//     // Default options are marked with *
//     const response = await fetch("https://dummyjson.com/products/1");
//     return response.json(); // parses JSON response into native JavaScript objects
// }
//
// // const dataPro = postData().then((data) => {
// //     return data
// // });
//
// console.log(postData())

// ------------------------------------
// let dataPro = {}
// let products = document.getElementById("demo");
// const dataPro = () => {
//      fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(function (response) {
//             if (response.ok) {
//                 return response.json();
//             }
//             throw new Error('Network response was not ok.');
//         })
//         .then(function (data) {
//             // console.log(data)
//         })
//         .catch(function (error) {
//             // Handle errors here
//         });
// }
//
// console.log(dataPro)
// products = dataPro


// ---------------------
// const products = document.getElementById("demo");
//
// // products.innerText = 'test'
// async function getText() {
//     const res = await fetch('https://dummyjson.com/products/1');
//     const data = await res.text();
//     products.innerText = data;
// }

// let dataP = getText()
// console.log(dataPro)

// -----------------------------

// let data = [];
// const x = async function () {
//     let obj;
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     obj = await res.json();
//     // data = obj
//     // return obj;
//     // console.log(obj)
// }
//
// // const products = x();
// console.log(x())

// ---------------------------------------

// let data = [];
//
// async function getRandomUser(){
//     // gets the response from the api and put it inside a constant
//     const response = await fetch('https://randomuser.me/api');
//     //the response have to be converted to json type file, so it can be used
//     const data = await response.json();
//     //the addData adds the object "data" to an array
//     addData(data)
// }
//
// function addData(object) {
//     // the push method add a new item to an array
//     // here it will be adding the object from the function getRandomUser each time it is called
//     data.push(object);
//     //the fetched data is available only on this scope
//     // console.log("This is the value of date inside the function addData:")
//     // console.log(data)
// }
//
// //Calls the function that fetches the data
// getRandomUser()
//
// // console.log("This is the value of data outside the scope")
// console.log(data)

// ------------------------------------------

// let data = []
// const dataF = function (success) {
//     //do what you want HERE.
//     console.log(success)
//     data.push(success)
//     return data;
// }
//
// fetch('https://reqres.in/api/users?page=2')
//     .then(data => data.json())
//     .then(success => dataF(success));
//
// console.log(dataF())

// -------------------------------------------

// Store database to array
// let database = []
//
//
// async  function my() {
//     const response =await fetch('https://reqres.in/api/users?page=2')
//     var data = await response.json();
//     database.push(data)
//     print(database)
// }
// console.log(my())
// function print(data){
//
//     console.log(data)
// }
//
// console.log("aadasd",database)

// ----------------------
