let p = document.querySelector("html").parentNode
console.log(p)

document.querySelector("#inner").parentElement.style.background = "red"

document.getElementById("inner").children[0].style.background = "red"

let c = document.getElementById("inner").childNodes
console.log(c)

document.getElementById("outer").firstElementChild.style.color = "blue"
document.getElementById("outer").firstChild.style.color = "blue"   // firstChild pe styling nahi hoti

let x = document.getElementById("outer").firstChild
console.log(x)

document.getElementById("inner").lastElementChild.style.background = "yellow"
document.getElementById("inner").lastChild.style.color = "yellow"    // lastChild pe styling nahi hoti

let z = document.getElementById("inner").lastChild
console.log(z)

document.getElementById("child-C").previousSibling.style.background = "yellow"   // previousSibling pe styling nahi hoti

let s = document.getElementById("child-C").previousSibling 
console.log(s)

document.getElementById("child-E").previousElementSibling.style.background = "yellow"

let se = document.getElementById("child-E").previousElementSibling 
console.log(se)

document.getElementById("child-head").nextSibling.style.background = "black"   // nextSibling pe styling nahi hoti

let n = document.getElementById("child-head").nextSibling
console.log(n)

document.getElementById("child-head").nextElementSibling.style.background = "green"

let ne = document.getElementById("child-head").nextElementSibling 
console.log(ne)