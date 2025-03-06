// Fetch 

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then((data) => {console.log(data)
// for(var x in data){
//     var a = `${data[x].name} - ${data[x].email} - ${data[x].website} <br>`
//     document.write(a)
// }
// })
// .catch(error => console.log(error))

document.getElementById('submit').addEventListener("click", function (e) {
    e.preventDefault()

    let obj = {
        title: document.getElementById('titleText').value,
        body: document.getElementById('bodyText').value,
        userId: document.getElementById('UserIdText').value,
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

})
