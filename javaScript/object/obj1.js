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
