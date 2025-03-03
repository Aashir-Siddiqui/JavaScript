// import {num, user, employee} from "./module2.js"

// console.log(num)

// console.log(user(2, 5))

// let a = new employee("Aashir", "Developer", 17, "aashir@email.com")
// console.log(a)


// import {number as num, sum as add, employee as emp} from "./module2.js"

// console.log(num)

// console.log(add(2, 5))

// let a = new emp("Aashir", "Developer", 17, "aashir@email.com")
// console.log(a)


// import * as ex from "./module2.js"

// console.log(ex.number)

// console.log(ex.sum(2, 5))

// let a = new ex.employee("Aashir", "Developer", 17, "aashir@email.com")
// console.log(a)

// import y from "./module2.js"
// y("Aashir")


import {abc} from "./moduleBridge.js"

console.log(abc.number)

abc.default("Ali")

console.log(abc.sum(4, 3))

let employee1 = new abc.employee("Ahmed", "Developer", 22, "xyz@gmail.com")
console.log(employee1)