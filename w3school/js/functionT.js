function jobOne(){
    console.log('Job One');
}

function jobTwo(){
    console.log('Job Two');
}

// jobOne();
// jobTwo();

setTimeout(jobOne,2000);
jobTwo();