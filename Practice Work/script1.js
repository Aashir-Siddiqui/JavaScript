var table = +prompt('Enter Table Number')
var limit = +prompt('Enter Table Limit')
for (var i = 1; i <= limit; i++) {
    document.write(`${table} x ${i} = ${table * i} <br>`)
}

var num = +prompt('Enter any number')
for (var i = 1; i <= num; i++) {
    if (i % 2 == 1) {
        document.write(i + "<br>")
    }
}

for (var i = 0; i <= 10; i = i + 2) {
    document.write(i + "<br>")
}

var i = 2
i = i + 2
document.write(i)

var fruits = ['apple', 'banana', 'orange', 'mango']
for (var i = 1; i < fruits.length; i = i + 2) {
    document.write(fruits[i] + "<br>")
}

var cars = ['audi', 'mheran', 'Fx', 'charade', 'corolla']
var customer = prompt('Enter car name')
var match = false
for (var i = 0; i < cars.length; i++) {
    if (customer == cars[i]) {
        match = true
        document.write(`${customer} is found`)
    }
}
if (match == false) {
    document.write(`${customer} is not found`)
}

var cities = ['Karachi', 'Islamabad', 'Lahore', 'Quetta']
var userCities = prompt('Enter any city')
var matchCities = false
for (var i = 0; i < cities.length; i++) {
    if (userCities == cities[i]) {
        matchCities = true
        document.write(`${userCities} is good city`)
    }
}
if (matchCities == false) {
    document.write(`${userCities} is bad city`)
}

var colors = ['red', 'green', 'blue']
var first = colors.unshift('pink')
var second = colors.push('black')
var third = colors.unshift('yellow', 'white')
var fourth = colors.shift()
var fifth = colors.pop()
var user = prompt('Enter color name')
var userInfo = user + colors
document.write(userInfo)

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        document.write(`i=${i}, j=${j} <br>`);
    }
}

var color = ['red', 'green', 'blue']
var index = +prompt('Enter the index of the array do you want to add the color (0 to ' + color.length + ')')
var colorName = prompt("Enter the color name")

if (index >= 0 && index <= color.length) {
    document.write("Previous Colors Array " + color + "<br>")
    color.splice(index, 0, colorName)
    document.write(`Update Colors Array: ${color.join(",")}`)
}
else {
    document.write('Invalid index please try again')
}

var num = +prompt('Enter the number')
if (num % 2 == 0) {
    document.write('Number is even')
}
else {
    document.write('Number is odd')
}

var user = prompt('Enter user name')
var userPassword = prompt('Enter password')
var admin = 'admin'
var password = '123'
if (user === admin && userPassword === password) {
    document.write('Welcome you enter correct password')
}
else {
    document.write('Sorry you enter wrong password')
}