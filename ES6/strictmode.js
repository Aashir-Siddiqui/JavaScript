"use strict";


// a = 5
// console.log(a) //error


let a = 5
console.log(a) //correct


// function test(){
//     b = 10
// }
// test()  //error


function test(){
    let b = 10
    console.log(b)
}
test()  //correct


// let sum = (a, b, b) => {
//     console.log(a + b + b)
// }
// sum(10, 20, 30)  //error


let sum = (a, b, c) => {
    console.log(a + b + c)
}
sum(10, 20, 30)  //correct