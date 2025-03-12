// className method (ye method class ki string return karta hai console main)

var a = document.querySelector("h1").className = "abc xyz"
console.log(a)


// style method 

var b = document.querySelector("h2").style.color = "red"
console.log(b)


// classList method (ye metod array return karta hai class ki console main)
// .add or .remove is k method hen 

var c;
document.querySelector("h3").classList = "abc"
document.querySelector("h3").classList.add("xyz")
document.querySelector("h3").classList.remove("abc")
c = document.querySelector("h3").classList
console.log(c)
