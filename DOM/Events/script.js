// // addEventListener method 

// document.querySelector("h1").addEventListener("click", () => {
//     document.querySelector("h1").style.backgroundColor = "red"
// })


// // this arrow function pe nahi chalta
// document.querySelector("h2").addEventListener("click", function () {
//     this.style.backgroundColor = "red"
//     this.style.color = "white"
// })


// document.querySelector("h3").addEventListener("mouseleave", abc)
// function abc() {
//     document.querySelector("h3").style.border = "10px solid green"
// }


// document.querySelector("h3").addEventListener("click", function () {
//     this.style.backgroundColor = "blue"
//     this.style.color = "white"
//     document.querySelector("h3").removeEventListener("mouseleave", abc)
// })

// document.querySelector("h4").addEventListener("dblclick", function(){
//     alert("dbClick enable")
// })

// document.querySelector("h5").addEventListener("contextmenu", function(){
//     alert("contextmenu enable")
// })

// document.querySelector("h6").addEventListener("mouseenter", function(){
//     alert("mouseenter enable")
// })

// document.querySelector("#p1").addEventListener("mouseout", function(){
//     alert("mouseout enable")
// })

// document.querySelector("#p2").addEventListener("mousedown", function(){
//     alert("mousedown enable")
// })

// document.querySelector("#p2").addEventListener("mousedown", function(){
//     alert("mousedown enable")
// })

// document.querySelector("#p3").addEventListener("mouseup", function(){
//     alert("mouseup enable")
// })

// document.querySelector("body").addEventListener("keypress", function(){
//     alert("keypress enable")
// })

// document.querySelector("body").addEventListener("keyup", function(){
//     alert("keyup enable")
// })

document.querySelector("body").addEventListener("scroll", function(){
    alert("scroll enable")
})