var txt = "Hello World"
var myArr = txt.split("")
for (var i = 0; i < myArr.length; i++) {
    document.write(`${myArr[i]} <br>`)
}

var table = +prompt("Enter any table number")
var limits = +prompt("Enter table limits")
for (var i = 1; i <= limits; i++) {
    document.write(`${table} x ${i} = ${table * i} <br>`)
}

var str = "The quick brown fox jump over the lazy dog"
var newStr = str.toLowerCase()
var iterator = newStr.matchAll("the")
var arr = Array.from(iterator)
document.write(arr)
