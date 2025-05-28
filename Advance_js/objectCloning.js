// cloning using spread operator

const user1 = {
    name: "Aashir",
    age: 18,
    gender: "Male"
}

let clone = {...user1} 

user1.age = 20

console.log(user1)
console.log(clone)


// cloning using assign method


const user2 = {
    name: "Naveed",
    age: 21,
    gender: "Male"
}

let assg = Object.assign({}, user2)

user2.name = "Ali"

console.log(user2)
console.log(assg)


// cloning using iteration


const user3 = {
    name: "Ahmed",
    age: 17,
    gender: "Male"
}

let itera = {}

for(let key in user3){
    let newKey = key
    let newValue = user3[key]
    itera[newKey] = newValue
}

user3.age = 18

console.log(user3)
console.log(itera)