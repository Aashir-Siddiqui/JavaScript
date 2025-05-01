document.getElementById("btn").addEventListener("click", () => {
    window.scrollBy(0, 20)
})

document.getElementById("btn").addEventListener("click", () => {
    window.scrollBy(0, -50)
})

document.getElementById("btn").addEventListener("click", () => {
    window.scrollBy(50, 0)
})

document.getElementById("btn").addEventListener("click", () => {
    window.scrollBy(-50, 0)
})

document.getElementById("btn").addEventListener("click", () => {
    setTimeout(() => {
        window.scrollTo(0, 0)
    }, 1000);
})

document.getElementById("btn").addEventListener("click", () => {
    setTimeout(() => {
        window.scrollTo(0, 100)
    }, 1000);
})

document.getElementById("btn").addEventListener("click", () => {
    setTimeout(() => {
        window.scrollTo(100, 0)
    }, 1000);
})