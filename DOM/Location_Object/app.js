console.log(location)

console.log(location.host)

console.log(location.hostname)

console.log(location.href)

console.log(location.pathname)

console.log(location.protocol)

console.log(location.port)

console.log(location.hash)

console.log(location.search)

console.log(location.origin)

// document.getElementById("btn").addEventListener("click", ()=>{
//     window.location.reload()
// })

// document.getElementById("btn").addEventListener("click", ()=>{
//     window.location.assign("https://foodpanda-aashir.netlify.app/index.html")
// })

document.getElementById("btn").addEventListener("click", ()=>{
    window.location.replace("https://foodpanda-aashir.netlify.app/index.html")
})

console.log(history)

console.log(history.length)

document.getElementById("forBtn").addEventListener("click", ()=>{
    history.forward()
})

document.getElementById("backBtn").addEventListener("click", ()=>{
    history.back()
})

document.getElementById("goBtn").addEventListener("click", ()=>{
    history.go(1)
})