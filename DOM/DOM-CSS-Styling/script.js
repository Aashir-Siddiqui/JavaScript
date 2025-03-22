// className method (ye method class ki string return karta hai console main)

var a = document.querySelector("h1").className = "abc xyz"
console.log(a)


// style method 

var b = document.querySelector("h2").style.color = "red"
console.log(b)


// classList method (ye metod array return karta hai class ki console main)
// .add or .remove is k method hen 

var c;
document.querySelector("h3").classList = "abc"
document.querySelector("h3").classList.add("xyz")
document.querySelector("h3").classList.remove("abc")
c = document.querySelector("h3").classList
console.log(c)


// classList method toggle 

document.querySelector("#BTN").addEventListener("click", changeColor)
function changeColor() {
    document.querySelector("#BTN").classList.toggle("btn")
}


// classList method length

let getBtn1 = document.querySelector("#BTN").classList.length
console.log(getBtn1)


// classList method item

let geth1 = document.querySelector("h1").classList.item(1)
console.log(geth1)


// classList method contains

let getBtn2 = document.querySelector("#BTN").classList.contains("btn")
console.log(getBtn2)