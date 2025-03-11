// DOM Get Method 

// let getElement = document.getElementById("header").innerText
// let getElement = document.getElementById("header").innerHTML
// let getElement = document.getElementById("headId").getAttribute("style")
// let getElement = document.getElementById("headId").getAttributeNode("style")
// let getElement = document.getElementById("headId").getAttributeNode("style").value
// let getElement = document.getElementById("headId").attributes
let getElement = document.getElementById("headId").attributes[2]
console.log(getElement)


// DOM Set Method 

var setElement;

setElement = document.getElementById('headId').innerText
console.log(setElement)

setElement = document.getElementById('headId').innerText = "<h1>Change Heading</h1>"
console.log(setElement)

setElement = document.getElementById('headId').innerHTML
console.log(setElement)

setElement = document.getElementById('headId').innerHTML = "Change Heading"
console.log(setElement)

setElement = document.getElementById('headId').setAttribute("class", "abc")
setElement = document.getElementById('headId').setAttribute("style", "border: 2px dotted green")

setElement = document.getElementById('headId').removeAttribute("class")

console.log(setElement)


// querySelector & querySelectorAll 

var element;

element = document.querySelector('#headId').innerHTML = "Change Heading 1"
console.log(element)

element = document.querySelectorAll('h1')[2].innerHTML = "Change Heading 3"
console.log(element)

element = document.querySelectorAll('#header h1')[1].innerHTML = "Change Heading 2"
console.log(element)

element = document.querySelectorAll('#main h1')[1].innerHTML = "Change Heading 4"
console.log(element)