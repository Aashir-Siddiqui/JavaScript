var h5 = document.querySelector('h5')
var btn = document.querySelector('button')
var check = 0
btn.addEventListener('click', function(){
    if(check == 0){
    h5.innerHTML = "Friends"
    h5.style.color = 'gray'
    btn.innerText = "Remove"
    btn.style.backgroundColor = 'gray'
    check = 1
    }
    else{
        h5.innerHTML = "Stranger"
        h5.style.color = 'cadetblue'
        btn.innerText = "Add Friend"
        btn.style.backgroundColor = 'cadetblue'
        check = 0
    }
})