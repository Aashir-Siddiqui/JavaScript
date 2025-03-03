export default  function(name){
    console.log(`Hello ${name}`)
} 

let number = 10

let sum = (num1, num2) => {
    return num1 + num2
}

class employee{
    constructor(name, post, age, email){
        this.name = name
        this.post = post
        this.age = age
        this.email = email
    }
}

export{number, sum, employee}