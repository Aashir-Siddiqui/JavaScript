function getPara() {
    var txt = 'Hello World';
    var para2 = document.getElementById('p2');
    var readMoreAnchor = document.getElementById('anc1');
    var readLessAnchor = document.getElementById('anc2');
    para2.innerText = txt;
    readMoreAnchor.style.display = 'none'; 
    readLessAnchor.style.display = 'inline'; 
}

function hidePara() {
    var para2 = document.getElementById('p2');
    var readMoreAnchor = document.getElementById('anc1');
    var readLessAnchor = document.getElementById('anc2');
    para2.innerText = '';
    readMoreAnchor.style.display = 'inline'; 
    readLessAnchor.style.display = 'none'; 
}
