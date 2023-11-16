function add(a,b, callback){
    console.log(`The sum of ${a} and ${b} is ${a+b}`);
    callback();
}

function message(){
    console.log('Action Done!');
}

add(5,6, message)