// While loop

let y = 1
while(y <= 10){
    document.write(`${y}: Hello world <br>`)
    y++
}


// Do While loop

let x = 1
do {
    document.write(`${x}: Hello <br>`)
    x++
} while(x <= 10);


// For loop

for(let i = 1; i <= 10; i++){
    document.write(`${i}: Hey <br>`)
}


// Break and Continue 

for (let j = 1; j <= 10; j++) {
    if (j == 5) {
        document.write(`${j}: Break <br>`)
        break
    }
    document.write(`${j}: Break <br>`)
}

for (let k = 1; k <= 10; k++) {
    if (k == 7) {
        document.write(`${k}: Continue <br>`)
        continue
    }
    document.write(`${k}: Hello world <br>`)
}


// Nested loop

for (let a = 1; a <= 100; a += 10){
    for(let b = a; b < a+10; b++){
        document.write(`${b} `)
    }
    document.write("<br>")
}

// output
// 1 2 3 4 5 6 7 8 9 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// 51 52 53 54 55 56 57 58 59 60
// 61 62 63 64 65 66 67 68 69 70
// 71 72 73 74 75 76 77 78 79 80
// 81 82 83 84 85 86 87 88 89 90
// 91 92 93 94 95 96 97 98 99 100


for(let a = 1; a <= 5; a++){
    for(let b = 1; b <= a; b++){
        document.write(b + " ")
    }
    document.write("<br>")
}

// output
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


for(let a = 1; a <= 5; a++){
    for(let b = 1; b <= a; b++){
        document.write(a + " ")
    }
    document.write("<br>")
}

// output
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5


for(let a = 5; a >= 1; a--){
    for(let b = 1; b <= a; b++){
        document.write(a + " ")
    }
    document.write("<br>")
}

// output
// 5 5 5 5 5
// 4 4 4 4
// 3 3 3
// 2 2
// 1


for(let a = 5; a >= 1; a--){
    for(let b = 1; b <= a; b++){
        document.write(b + " ")
    }
    document.write("<br>")
}

// output
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1


for(let a = 5; a >= 1; a--){
    for(let b = 5; b >= a; b--){
        document.write(b + " ")
    }
    document.write("<br>")
}

// output
// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1


for(let a = 5; a >= 1; a--){
    for(let b = 5; b >= a; b--){
        document.write(a + " ")
    }
    document.write("<br>")
}

// output
// 5
// 4 4
// 3 3 3
// 2 2 2 2
// 1 1 1 1 1


for(let a = 5; a >= 1; a--){
    for(let b = a; b >= 1; b--){
        document.write(a + " ")
    }
    document.write("<br>")
}

// output
// 5 5 5 5 5
// 4 4 4 4
// 3 3 3
// 2 2
// 1


for(let a = 5; a >= 1; a--){
    for(let b = a; b >= 1; b--){
        document.write(b + " ")
    }
    document.write("<br>")
}

// output
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1
