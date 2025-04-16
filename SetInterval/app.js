var x = 0
var loading = setInterval(anima, 500)

function anima(){
    x = x + 10
    if(x == 500){
        clearInterval(loading)
    }else{
        let target = document.querySelector(".box")
        target.style.width = x + 'px' 
    }
}