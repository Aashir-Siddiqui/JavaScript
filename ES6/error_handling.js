try{
    console.log("try started")

    err()

    console.log("try ended")
}catch(error){
    console.log(error)
}

setTimeout(() => {
    try{
        console.log("Started")

        xyz

        console.log("Ended")
    }catch(error){
        console.log(error.message)
        console.log(error.name)
        console.log(error.stack)
    }
}, 1000);


// Jvascript Error 
// 1) EvalError
// 2) RangeError
// 3) ReferenceError
// 4) SyntaxError
// 5) TypeError
// 6) URIError
// 7) AggregateError


try {
    lol
} catch (error) {
    if(error instanceof ReferenceError){
        console.log('Reference error')
    }else if(error instanceof SyntaxError){
        console.log('Syntax error')
    }else{
        console.log('Unkown error')
    }
}


try {
    let json = '{name":"Aashir", "age":17}' //Syntax error double quotes missing ("name") = (name")
    let user = JSON.parse(json)

    console.log(user.name)
    console.log(user.age)
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log('Reference error')
    } else if (error instanceof SyntaxError) {
        console.log('Syntax error')
    } else {
        console.log('Unkown error')
    }
}


try {
    let json = '{"age":17}'
    let user = JSON.parse(json)

    if(!user.name){
        throw new Error("Incomplete data : No name")
    }

    console.log(user.name)
    console.log(user.age)
} catch (error) {
    console.log(error)
}


try {
    let json = '{"age":17}'
    let user = JSON.parse(json)

    if(!user.name){
        throw new Error("Incomplete data : No name")
    }

    console.log(user.name)
    console.log(user.age)
} catch (error) {
    console.log(error)
}finally{
    console.log("finally")  //Finally is run in both case
}