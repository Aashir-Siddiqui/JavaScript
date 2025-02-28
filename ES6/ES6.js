// Object literal

// let name = "Aashir"
// let age = 17
// let obj = {
//     name,
//     age
// }
// let n = "name"
// let a = "age"
// let obj = {
//     [n]: "Aashir",
//     [a]: 17
// }
// console.log(typeof obj[a])
// let n = "Student"
// let a = "age"
// let obj = {
//     [n + "name"]: "Aashir",
//     [a]: 17,
//     detail: function () {
//         return `${this.Studentname} is ${this.age} year old`
//     }
// }
// console.log(obj)
// console.log(obj.detail())
// let n = "Student"
// let a = "age"
// let obj = {
//     [n + "name"]: "Aashir",
//     [a]: 17,
//     'detail show'() {
//         return `${this.Studentname} is ${this.age} year old`
//     }
// }
// console.log(obj)
// console.log(obj['detail show']())


// Array Destructuring

// let user = ["Aashir", 17, "Karachi"]
// let [name, age, city] = user

// let user = ["Aashir", 17, "Lahore", ["Male", 200000]]
// let [name = "Guest", age = 18, city = "Karchi", [gender, salary]] = user
// console.log(name)
// console.log(age)
// console.log(city)
// console.log(gender)
// console.log(salary)

// let user = ["Aashir", 17, "Lahore", ["Male", 200000]]
// let [name, ...args] = user
// console.log(name)
// console.log(args)

// let user = ([name, age, city]) => {
//     console.log(name)
//     console.log(age)
//     console.log(city)
// }
// user(["Aashir", 17, "karachi"])

// let user = () => {
//     return ["Aashir", 17, "karachi"]
// }
// let [name, age, city] = user()
// console.log(name)
// console.log(age)
// console.log(city)


// object Destructuring

// let user = {
//     name: "Aashir",
//     age: 17,
//     city: "karahi"
// }

// let { name: n, age: a, city: c } = user
// console.log(n)
// console.log(a)
// console.log(c)


// Rest Operator

// function sum(name, ...arg) {
//     let sum = 0
//     for (let i in arg) {
//         sum += arg[i]
//     }
//     console.log(arguments)
//     document.write(sum + "<br>")
// }
// sum("aashir", 2, 3, 4, 2)


// spread operator

// let arr = [1, 2, 3, 4, 5]
// let arr2 = [...arr]
// arr2.push(6)
// console.log(arr)

// let obj1 = {
//     name: "Aashir"
// }
// let obj2 = {
//     age: 17
// }
// let obj3 = {
//     city: "karachi",
//     ...obj1, ...obj2
// }
// console.log(obj3)

// function sum(name, ...arg) {
//     let sum = 0
//     for (let i in arg) {
//         sum += arg[i]
//     }
//     console.log(arguments)
//     document.write(sum + "<br>")
// }
// let arr = [2, 3, 4, 5]
// sum("aashir", ...arr)


// OOP 

class user{
    // constructor Method
    constructor (name, age){
        this.userName = name;
        this.userAge = age;
        console.log("Constructor Function")
    }

    // Prototype Method 
    hello(){
        console.log(`My name is ${this.userName} and i am ${this.userAge} years old.`)
    }

    // Static Method 
    static staticMethod(){
        console.log("Static Function")
    }
}

let a = new user("Aashir", 17)
console.log(a)

a.hello()

user.staticMethod()