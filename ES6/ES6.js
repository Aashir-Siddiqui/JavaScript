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

// class user {
//     // constructor Method
//     constructor(name, age) {
//         this.userName = name;
//         this.userAge = age;
//         console.log("Constructor Function")
//     }

//     // Prototype Method 
//     hello() {
//         console.log(`My name is ${this.userName} and i am ${this.userAge} years old.`)
//     }

//     // Static Method 
//     static staticMethod() {
//         console.log("Static Function")
//     }
// }

// let a = new user("Aashir", 17)
// console.log(a)

// a.hello()

// user.staticMethod()


// Class Inheritance

// class employee{
//     constructor (name){
//         console.log(`Constructor: Employee ${name}`)
//     }
// }

// class manager extends employee{
//     constructor(name){
//         super()
//         console.log(`Constructor: Manager ${name}`)
//     }
// }

// let a = new manager("Aashir")
// console.log(a)

// class employee {
//     constructor(name, age, salary) {
//         this.employeeName = name
//         this.employeeAge = age
//         this.employeeSalary = salary
//         console.log(`Constructor: Employee`)
//     }
//     info() {
//         document.write(`
//             <h2>Employee Class<h2>
//             Name : ${this.employeeName} <br>
//             Age : ${this.employeeAge} <br>
//             Salary : ${this.employeeSalary} <br>
//             `)
//     }
// }

// class manager extends employee {
//     info() {
//         let bonus = 10000
//         let totalSalary = this.employeeSalary + bonus
//         document.write(`
//             <h2>Manager Class<h2>
//             Name : ${this.employeeName} <br>
//             Age : ${this.employeeAge} <br>
//             Salary : ${totalSalary} <br>
//             `)
//     }
// }

// class GM extends manager {
//     info() {
//         let bonus = 10000
//         let travelAlaince = 20000
//         let GMSalary = this.employeeSalary + travelAlaince + bonus
//         document.write(`
//             <h2>GM Class<h2>
//             Name : ${this.employeeName} <br>
//             Age : ${this.employeeAge} <br>
//             Salary : ${GMSalary} <br>
//             `)
//     }
// }

// let a = new GM("Ahmed", 22, 40000)
// let b = new manager("Aashir", 17, 40000)
// let c = new employee("Ali", 20, 40000)
// a.info()
// b.info()
// c.info()


// Promise 

let prom = (complete) => {
    return new Promise(x = (resolve, reject) => {
        console.log("Feteching data...")
        setTimeout(()=>{
            if(complete){
                resolve("I am successful 😎")
            }else{
                reject("I am failed 😭")
            }
        }, 3000)
    })
}

prom(true).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

let division = (a, b) => {
    return new Promise(x = (resolve, reject) => {
        console.log("Feteching data...")
        let c = a / b
        setTimeout(()=>{
            if(a, b){
                resolve(`The divisio value of a and b is : ${c}`)
            }else{
                reject("Failed to division")
            }
        }, 3000)
    })
}

division(9,).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})