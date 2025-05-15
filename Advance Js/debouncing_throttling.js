let normal = document.querySelector(".normal")
let throttling = document.querySelector(".throttling")
let debouncing = document.querySelector(".debouncing")
let n = 0
let t = 0
let isScrolling = true
let d = 0
let intervel;


const normalCount = () => {
    n++
    normal.innerHTML = `Noraml Count: ${n}`
}


const throttlingCount = () => {
    if (isScrolling == true) {
        t++
        throttling.innerHTML = `Throttling Count: ${t}`
        isScrolling = false
        setTimeout(() => {
            isScrolling = true
        }, 1000);
    }
}


const debouncingCount = () => {
    clearInterval(intervel)

    intervel = setTimeout(() => {
        d++
        debouncing.innerHTML = `Debouncing Count: ${d}`
    }, 1000);
}

function show() {
    normalCount()
    throttlingCount()
    debouncingCount()
}
