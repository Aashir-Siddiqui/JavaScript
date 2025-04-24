let fruit = "Apple"

console.log(fruit.length)

console.log(fruit.charAt(3))

console.log(fruit.charCodeAt(0))

console.log(fruit.at(2))
console.log(fruit[2])

console.log(fruit.slice(-2, 7))

console.log(fruit.substring(-1, 1))

console.log(fruit.toUpperCase())

console.log(fruit.toLowerCase())

console.log(fruit.concat(" " + "Banana"))

let fruit2 = "   Kiwi   "

console.log(fruit2.trim())

console.log(fruit2.trimStart())

console.log(fruit2.trimEnd())

let num = 5

console.log(num.toString().padStart(3, "2"))

console.log(num.toString().padEnd(5, "8"))

console.log(fruit.concat(" ").repeat(3))

let text = "Practice JavaScript Array and Array Method" 

console.log(text.replace(/ARRAY/i, "String"))

console.log(text.replace(/ARRAY/gi, "String"))

console.log(text.replaceAll("Array", "String"))
 
console.log(text.substr(0, 4))

console.log(text.indexOf("c"))

console.log(text.lastIndexOf("c"))

console.log(text.search("a"))

let str = "The rain in SPAIN stays mainly in the plain"

let m1 = str.match(/ain/)

let m2 = str.match(/ain/g)

let m3 = str.match(/ain/gi)

console.log(m3)

console.log(Array.from(str.matchAll("ain")))

console.log(Array.from(str.matchAll(/ain/gi)))

console.log(str.includes("spain".toUpperCase()))

console.log(str.includes("rain", 4))

console.log(str.startsWith("The"))

console.log(str.startsWith("rain", 4))

console.log(str.endsWith("plain"))

console.log(str.endsWith("rain", 8))

let sp = "Apple"

let testSp = sp.split("", 2)

console.log(testSp)

let testSp2 = sp.split("").join("-")

console.log(testSp2)

let name = "Aashir"

console.log(`My name is ${name}`)

let stra = 'apple';
let strb = 'banana';
let strc = 'orange';

let result = strc.localeCompare(stra);

console.log(result);