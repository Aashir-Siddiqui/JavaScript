function add(a, b, cb) {
    let result = a + b
    cb(result)
    return () => console.log(result)
}

const func = add(2, 2, () => { })
func()


function plus(a, b, cb) {
    let result = a + b
    cb(result)
}

function showResult(result) {
    console.log(result)
}

plus(3, 3, showResult)


function multiplier(factor) {
    return function (num) {
        return num * factor
    }
}

const double = multiplier(2)
console.log(double(5))

const triple = multiplier(3)
console.log(triple(4))


const arr = [1, 2, 3, 4, 5]

const sum = arr.reduce(function (num, acc) {
    return num + acc
}, 0)

console.log(sum)


const ages = [15, 22, 18, 30]

const adults = ages.filter(function (age) {
    return age >= 18
})

console.log(adults)


const numbers = [1, 2, 3]

const doubled = numbers.map(function (num) {
    return num * 2
})

console.log(doubled)
