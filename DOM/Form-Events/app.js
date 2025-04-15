let getName = document.getElementById("iname")
let getEmail = document.getElementById("iemail")
let getNum = document.getElementById("inum")
let gettext = document.getElementsByClassName("text")
let getForm = document.querySelector("form")


function focusFunc(f){
    f.target.style.background = "lime"
}

function blurFunc(b){
    b.target.style.background = ""
}

function onInpFunc(e){
    var x = e.target.value
    gettext[0].innerHTML = x
}

getName.addEventListener("input", onInpFunc)
getEmail.addEventListener("input", onInpFunc)

getName.addEventListener("focus", focusFunc)
getEmail.addEventListener("focus", focusFunc)

getName.addEventListener("blur", blurFunc)
getEmail.addEventListener("blur", blurFunc)

function onChangeFunc(e){
    var x = e.target.value
    gettext[0].innerHTML = x
}

function onSelectFunc(){
    alert("You Selected Phone Number")
}

getNum.addEventListener("change", onChangeFunc)
getNum.addEventListener("select", onSelectFunc)

function onSubmitFunc(){
    alert(`${getName.value} Submit Form Successfully 🥳`)
}

getForm.addEventListener("submit", onSubmitFunc)