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

let newElement3 = document.createElement("h1")
console.log(newElement3)

let newText3 = document.createTextNode("This is text 3")
console.log(newText3)

newElement3.append(newText3)

target.insertAdjacentElement("beforebegin", newElement3)

let newElement4 = "<h2>Hello World</h2>"
console.log(newElement4)

target.insertAdjacentHTML("afterbegin", newElement4)

let newText4 = "This is text 4"
console.log(newText4)

target.insertAdjacentText("beforeend", newText4)

let newElement5 = "<h1>This is H1</h1>"
console.log(newElement5)

target.insertAdjacentHTML("afterend", newElement5)

let newLi = document.createElement("li")

let newLiText = document.createTextNode("Kiwi")

newLi.appendChild(newLiText)
console.log(newLi)

let targetUl = document.querySelector("#ul1")
console.log(targetUl)

let oldLiText = targetUl.children[1]
console.log(oldLiText)

targetUl.replaceChild(newLi, oldLiText)

oldLiText = targetUl.children[3]
console.log(oldLiText)

targetUl.removeChild(oldLiText)

let getUl1 = document.getElementById("ul1").children[0]
let cloneElement = getUl1.cloneNode(true)   // CloneNode By Default Value False hoti hai
console.log(cloneElement)

let getul2 = document.getElementById("ul2")
console.log(getul2)
getul2.appendChild(cloneElement)

let find = targetUl.contains(getUl1)
console.log(find)

let abc = document.getElementsByClassName("abc") //fake class
let findAt = targetUl.hasAttribute("class")
console.log(findAt)

let findChild = getul2.hasChildNodes()
console.log(findChild)

getUl1.children[2]
getul2.children[3]
let equal = getUl1.isEqualNode(getul2)
console.log(equal)