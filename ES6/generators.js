function *g(){
    yield "Yield No 1"
    yield "Yield No 2"
    yield "Yield No 3"
}

console.log(g().next().value)
g().next()
console.log(g().next().value)


function *gen(){
    let nextNum = 1
    while(true){
        yield(nextNum++)
    }
}

let generator = gen()

for(let value of generator){
    if(value > 10) break
    console.log(value)
}


function *gen(){
    let result = (yield) * 10
    console.log(`Result: ${result}`)
}

let g = gen()
g.next() //One time is ko chalana zarori hai
g.next(10)


function *gen(){
    let result = [yield, yield, yield]
    console.log(`Result: ${result[1]}`)
}

let g = gen()
g.next() //One time is ko chalana zarori hai
g.next("Apple")
g.next("Mango")
g.next("Kiwi")


function *gen(){
    yield 'HTML'
    yield* ['CSS', 'JS', 'React JS']
}

let g = gen()
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)


function *gen(){
    yield 'HTML'
    yield 'CSS'
    yield 'JS'
    yield 'React JS'
}

let g = gen()
console.log(g.next().value)
console.log([...g])


function *gen(){
    yield 'HTML'
    yield 'CSS'
    yield 'JS'
    yield 'React JS'
}

let g = gen()
console.log(g.next().value)
console.log(g.return("End Now"))