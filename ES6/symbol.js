let s = Symbol("Hello")
console.log(s)
console.log(typeof(s))


let s1 = Symbol("Hello")
let s2 = Symbol("Hello")
console.log(s1 === s2)

alert(s1.description)


let age = Symbol("age").description

let user = {
    name: "Aashir",
    [age]: 17,
    email: "aashir@gmail.com"
}

for(key in user){
    console.log(key)
}

console.log(JSON.stringify(user))