function resize(){
    console.clear()

    let iHeight = window.innerHeight
    console.log(`Inner Height : ${iHeight}`)

    let oHeight = window.outerHeight
    console.log(`Outer Height : ${oHeight}`)

    let iwidth = window.innerWidth
    console.log(`Inner Width : ${iwidth}`)

    let owidth = window.outerWidth
    console.log(`Outer Width : ${owidth}`)
}


let myWindow;

// document.getElementById("btn1").addEventListener("click", () => {
//     myWindow = window.open("https://foodpanda-aashir.netlify.app/index.html", "", "width = 500px, height = 500px, left = 600px, top = 200px")
// })

// document.getElementById("btn2").addEventListener("click", () => {
//     myWindow = window.close()
// })

document.getElementById("btn1").addEventListener("click", () => {
    myWindow = window.open(",", "," , "width = 400px, height = 400px, left = 120px, top = 120px")
    myWindow.document.write("<p>This is myWindow</p>")
})

// document.getElementById("btn3").addEventListener("click", () => {
//     // myWindow = window.moveTo(200,200)
//     myWindow = window.moveBy(200,200)
//     // myWindow.focus()
// })

document.getElementById("btn4").addEventListener("click", () => {
    // myWindow = window.resizeTo(600,600)
    myWindow = window.resizeBy(600,600)
})