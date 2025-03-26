// Iterator With Array 

let numbers = [100, 200, 300, 400, 500]

let iter = numbers[Symbol.iterator]()

iter.next()
console.log(iter.next())
iter.next()
console.log(iter.next().value)
console.log(iter.next().done)
console.log(iter.next().done)

let result = iter.next()

while(!result.done){
    console.log(result.value)
    result = iter.next()
}


// Iterator With String

let str =  "Hello World"

let iterStr = str[Symbol.iterator]()

console.log(iterStr.next())
iterStr.next()
console.log(iterStr.next())
console.log(iterStr.next())
console.log(iterStr.next())
console.log(iterStr.next())
console.log(iterStr.next())
iterStr.next()
console.log(iterStr.next())
console.log(iterStr.next())
console.log(iterStr.next())

for (let char of str){
    console.log(char)
}


// Custom Iterator 

function  numIterator(arr){
    var nextNum = 0
    return{
        next(){
            if(nextNum < arr.length){
                return{
                    value: arr[nextNum++],
                    done: false
                }
            }else{
                return{
                    done: true
                }
            }
        }
    }
}

let number = [1, 2, 3, 4, 5]
let num = numIterator(number)

console.log(num.next().value)
num.next()
console.log(num.next().value)
console.log(num.next())
console.log(num.next().value)