export function arrayTest({noOfStars=5}) {
    [...Array(noOfStars)].map((_,index)=>{
        console.log(index)
    })
    // console.log(noOfStars)
}