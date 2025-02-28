// var a = document.getElementsByTagName("div")
// for (var i = 0; i < a.length; i++) {
//     a[i].innerHTML = "Hey"
// }

var a = document.getElementsByTagName('div')
a[0].innerHTML = 'Hey'

var h1 = document.querySelector('h1')
h1.innerHTML = "<h1>Hellooooo</h1>"
h1.innerText = "<h1>Hellooooo</h1>"
h1.textContent = "<h1>Hellooooo</h1>" // Both innertext, innerHTML and textContent are different

var para = document.querySelectorAll('p.para')
var pdemo = document.getElementById('demo')
pdemo.innerHTML = `Ye class para ki index[0] wali class hai: ${para[0].innerHTML = 'Ye change hogai'}`

const x = document.forms['frm']
var text = ''
var i = 0;
while (i < x.length){
    text += x.elements[i].value + "<br>"
    i++
}
var  fdemo = document.getElementById('fdemo')
fdemo.innerHTML = text

function formSubmit(){
    var f = document.forms['myform']['fname'].value
    if (f == "") {
        alert("Name must be filled out");
        return false; 
    }
    alert("Form submitted successfully!");
    return true;
}