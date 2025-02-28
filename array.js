const fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Banana'];

fruits.toString()

// let fruit = fruits[0]

// let fruit = fruits.length

// let fruit = fruits[fruits.length - 1]

fruits.push("lemon")

fruits.pop()

fruits.unshift("lemon")

fruits.shift()

// let fruit = fruits.at(2)

let fruit = fruits.join(" + ")

fruits.copyWithin(1, 2)

fruits.copyWithin(1, 0, 2)

delete fruits[0]

// let index = fruits.indexOf('Banana')

let index = fruits.lastIndexOf('Banana')

let hasBanana = fruits.includes('Banana')

fruits.forEach(function (fruit, index) {
    document.write(index, fruit + "<br>")
})

document.write(hasBanana)
document.write(index)
document.write(fruits)

let numbers = [1, 2, 3, 4, 18, 20, 21, 19]
let number_2 = [5, 4, 3, 2, 1]

let squareNumber = numbers.map(num => num * num)
document.write(squareNumber)

let fnum = numbers.filter(num => num >= 18)
document.write(fnum)

let sum = numbers.reduce((acc, num) => acc + num)
document.write(sum)

let hasEven = numbers.some(num => num >= 18);
document.write(hasEven);

let allEven = numbers.every(num => num >= 18)
document.write(allEven)

let firstEven = numbers.find(num => num % 2 === 0)
document.write(firstEven)

let firstOdd = numbers.findIndex(num => num >= 18)
document.write(firstOdd)

let result = numbers.flatMap(num => num * num)
document.write(result)

let str = "hello"
let arr = Array.from(str)
document.write(arr)

document.write(Array.isArray(numbers))

numbers.sort(function sortNum(a, b) { return a - b })
console.log(numbers)

numbers.reverse()
console.log(numbers)

numbers.fill(0)
document.write(numbers)

let numberStr = numbers.toString()
document.write(typeof (numberStr))

let dateArray = [new Date()]
document.write(dateArray.toLocaleString())

document.write(number_2)

let nestedArray = [1, [2, [3, [4]]]]
let flatArray = nestedArray.flat(3)
console.log(flatArray)

