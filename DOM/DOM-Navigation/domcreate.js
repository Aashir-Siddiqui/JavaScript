let newElement1 = document.createElement("h2")
console.log(newElement1)

let newElement2 = document.createElement("h4")
console.log(newElement2)

let newText1 = document.createTextNode("This is text 1")
console.log(newText1)

let newText2 = document.createTextNode("This is text 2")
console.log(newText2)

let newComment = document.createComment("This is comment")
console.log(newComment)

newElement2.appendChild(newText2)
newElement1.appendChild(newText1)

document.querySelector(".text").appendChild(newElement2)

var target = document.querySelector(".text")
target.insertBefore(newElement1, target.childNodes[0])