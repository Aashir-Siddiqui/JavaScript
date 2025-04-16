var anima = setTimeout(() => {
    let box = document.querySelector(".box")
    box.style.width = '500px'
},1000)

let btn = document.getElementById("btn").addEventListener("click", () => {
    clearTimeout(anima)
    console.log("Stop")
})

