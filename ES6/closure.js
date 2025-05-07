function outer() {

    let x = "I am from outer scope"

    function inner() {
        return x
    }

    return inner()
}

console.log(outer())


function func() {
    let arr = []

    for(let i=0; i<3; i++){
        arr.push(function () {
            return(i)
        })
    }

    return arr
}

const createFunc = func()

console.log(createFunc[0]())
console.log(createFunc[1]())
console.log(createFunc[2]())


function greeter(greeting) {
    return function (name) {
        return `${greeting}, ${name}`
    }
}

const hi = greeter("Hi")

console.log(hi("Aashir"))


function counter() {
    let count = 0

    return {
        increment: function () {
            count++
            return count
        },
        getCount: function () {
            return count
        }
    }
}

const counter1 = counter()
const counter2 = counter()

console.log(counter1.increment())
console.log(counter1.increment())
console.log(counter1.increment())
console.log(counter2.increment())
console.log(counter1.increment())


function multipiler(factor) {
    return (num) => num * factor
}

const double = multipiler(2)
const triple = multipiler(3)

console.log(double(4))
console.log(triple(4))


function createColleague(name, age, gender) {
    const greetingColleague = ` ${name}`
    return {
        name,
        age,
        gender,
        greet: (city) => `${greetingColleague}, I am ${age} years old and, I am from ${city}`,
    };
}

const colleague1 = createColleague("Aashir", 18, "Male")

console.log(colleague1.greet("Karachi"))