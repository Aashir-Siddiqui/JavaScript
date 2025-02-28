var fruits = ['apple', 'banana', 'grapes', 'banana']
var check = fruits.indexOf('banana', 2)
var check = fruits.lastIndexOf('banana', 2)
document.write(check)

var str = 'Aashir'
var check = str.charAt(3)
document.write(check)

var str = 'Good Night Good Night'
var replace = str.replace('Night', 'Morning')
var replace = str.replaceAll('Night', 'Morning')
document.write(replace)

var num = 12
document.write(typeof (num.toString()))

var num = Math.random() * 30
document.write(Math.floor(num))

var num = 77.45
document.write(Math.floor(num))
var num = 77.5
document.write(Math.round(num))
var num = 77.1
document.write(Math.ceil(num))

var input = prompt('Enter Your date,month,year')
var date = new Date().getTime()
var user = new Date(input).getTime()
var minus = date - user
var formula = minus / (1000 * 60 * 60 * 24 * 365)
document.write(Math.floor(formula))

var d = new Date()
document.write(d.getMonth() + 1)