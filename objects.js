var DATA = "Secret Information"
class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
    viewData() {
        console.log("Data = ", + DATA)
    }
}

class Admin extends User {
    constructor(name, email, age) {
        super(name, email, age)
        this.age = age
    }
    editData() {
        DATA = "Some where"
    }
}

var s1 = new User("Aashir", "aashir@email.com")
var admin = new Admin("Admin", "admin@email.com", 55)
console.log(admin)


var cars = {
    name: "Civiv",
    model: "2019",
    price: 27000000,
    color: "Silver"
}
cars.discount = "20%"
for (var key in cars) {
    document.write(`${key} : ${cars[key]} <br>`)
}
// document.write(cars)
console.log(cars)


var students = new Object()
students.fname = "Aashir"
students.lname = "Siddiqui"
students.id = 112
students.fullname = function () {
    return `${this.fname} ${this.lname}`
}

for (var key in students) {
    if (typeof students[key] === 'function') {
        document.write(`${key} : ${students[key]()} <br>`)
    }
    else {
        document.write(`${key} : ${students[key]} <br>`)
    }
}


let fruits = [
    { name: "apple", quantity: 300 },
    { name: "banana", quantity: 100 },
    { name: "kiwi", quantity: 600 },
    { name: "peach", quantity: 150 },
]

function myFunc({ quantity }) {
    return quantity > 200 ? "ok" : "low"
}

const result = Object.groupBy(fruits, myFunc)

let text = "These fruits are greater then 200: <br>"
for (let [x, y] of result.ok.entries()) {
    text += y.name + " " + y.quantity + "<br>";
}

text += "<br>These fruits are less then 200: <br>"
for (let [x, y] of result.low.entries()) {
    text += y.name + " " + y.quantity + "<br>";
}


document.write(text)