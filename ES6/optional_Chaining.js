// Optional Chaining with Object 

const user = {
    name: "Aashir",
    age: 18,
    address: {
        city: "Karachi",
        road: "Abc road karachi",
        zip: 708162 ,
        phone: +9231205432176,
    }
}

console.log(user?.name?.address?.houseNo)


// Optional Chaining with Array of object 

const student = [
    {name: "Ahmed", age: 20},
    {name: "Ali", age: 19},
    {name: "Saad", age: 21}
]

console.log(student[1]?.name?.rollNum)