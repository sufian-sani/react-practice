let myPromise = new Promise((resolveFunc,rejectFunc) => {
    let result = 55;
    if(result == 2){
        resolveFunc('Success');
    }else{
        rejectFunc('Failed!');
    }
});


myPromise.then((msg)=> console.log(`${msg}`));


myPromise.catch((err) => console.log(`${err}`));