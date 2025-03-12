// addEventListener method 

document.querySelector("h1").addEventListener("click", () => {
    document.querySelector("h1").style.backgroundColor = "red"
})


// this arrow function pe nahi chalta
document.querySelector("h2").addEventListener("click", function () {
    this.style.backgroundColor = "red"
    this.style.color = "white"
})


document.querySelector("h3").addEventListener("mouseleave", abc)
function abc() {
    document.querySelector("h3").style.border = "10px solid green"
}


document.querySelector("h3").addEventListener("click", function () {
    this.style.backgroundColor = "blue"
    this.style.color = "white"
    document.querySelector("h3").removeEventListener("mouseleave", abc)
})