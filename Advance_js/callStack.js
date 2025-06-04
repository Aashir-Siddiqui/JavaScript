// console.log(1)

// x()

// setTimeout(() => {
//     console.log(3)
// }, 3000);

// console.log(5)

// function x(){
//     console.log(4)
// }

// console.log(2)


// console.log("Start")

// setTimeout(() => {
//     console.log("Task queue")
// }, 0)

// Promise.resolve().then(() => {
//     console.log("Microtask queue")
// })

// console.log("end")


const p1 = new Promise(function(res, rej){
    setTimeout(() => {
        console.log('Promised 1 resolved')
    }, 6000)
})

const p2 = new Promise(function(res, rej){
    setTimeout(() => {
        console.log('Promised 2 resolved')
    }, 3000)
})