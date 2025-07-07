const factorial = (num) => {
    if(num === 1){
        return 1
    }else{
        return num * factorial (num - 1)
    }
}

console.log(factorial(5))


const reverseStr = (str) => {
    if(str.length === 0) return ""
    return reverseStr(str.slice(1)) + str[0]
}

console.log(reverseStr("aashir"))


const sum = (arr) => {
    if(arr.length === 0) return 0
    return arr[0] + sum(arr.slice(1))
}

console.log(sum([1, 2, 3, 4, 5]))


const power = (base, exp) => {
    if(exp === 0) return 1
    return base * power(base, exp - 1)
}

console.log(power(2, 3))