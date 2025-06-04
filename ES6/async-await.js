// async with function 

// async function hello(){
//     return "Hello"
// }
// hello().then((result)=>{
//     console.log(result)
// })


// async with Arrow function 

// let hey = async () => "Hey"
// hey().then((result)=>{
//     console.log(result)
// })


// await method

// let messages = async () => {
//     console.log("2: Message")
//     await console.log("3: Message")
//     console.log("4: Message")
// } 
// console.log("1: Message")
// messages()
// console.log("5: Meassage")


// await method with fetch

// async function test() {
//     const response = await fetch("student_data.json")
//     const student = await response.json()
//     return student
// }

// test().then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log(error)
// })


// async function test() {
//     const response = await fetch("student_data.json")
//     const student = await response.json()
//     return (await fetch("student_data.json")).json()
// }

// test().then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log(error)
// })


// async function test() {
//     try{
//     const response = await fetch("student_data.json")
//     const student = await response.json()
//     return student
//     }catch(error){
//         console.log(error)
//     }
// }

// test().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


async function makeAsycnRequest() {
    const url = 'https://fakestoreapi.com/users'
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error.message)
    }
}

makeAsycnRequest().then((users) => {
    console.log('Usrs:', users)
})