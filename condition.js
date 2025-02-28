var user = prompt("Enter Your Name")
var userProfe = prompt("Enter Your Profession")
var userMarry = prompt("Your are Married")
var userPatner = prompt("Enter Your Partner Name")
var userKids = +prompt("Enter Kids")
var marry = ""
if (marry == true) {
    document.write(`${user} you will be a ${userProfe}, and married to ${userPatner} with ${userKids} Kids.`)
}
else if (marry == false) {
    document.write(`${user} you will be a ${userProfe}.`)
}
else {
    document.write(`Enter your information.`)
}

var user = prompt("Enter Your Name");
var userProfe = prompt("Enter Your Profession");
var userMarry = prompt("Are you married? (yes or no)").toLowerCase();

if (user && userProfe && userMarry) {
    if (userMarry === "yes") {
        // If the user is married, ask for partner's name and number of kids
        var userPatner = prompt("Enter Your Partner's Name");
        var userKids = +prompt("Enter Number of Kids");

        if (userPatner && !isNaN(userKids)) {
            document.write(`${user}, you will be a ${userProfe}, and married to ${userPatner} with ${userKids} kid(s).`);
        } else {
            document.write("Please enter valid information about your partner and kids.");
        }
    } else if (userMarry === "no") {
        // If the user is not married
        document.write(`${user}, you will be a ${userProfe}.`);
    } else {
        // If user enters invalid response for marriage
        document.write("Please answer 'yes' or 'no' for the marital status.");
    }
} else {
    // If required fields are not filled
    document.write("Enter your information.");
}

var book = " 'A smart way to learn javascript' "
var message = prompt("Enter message")
alert(`${message} ${book}`)

var gender = prompt("Enter Your Gender").toLowerCase()
if (gender === "male") {
    document.write('Hello Sir')
}
else if (gender === "female") {
    document.write('Hello Ma\'am')
}
else {
    document.write('Enter your Gender')
}

var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var operator = prompt("Enter an operator (+, -, *, /):");

var result;

if (operator === "+") {
    result = num1 + num2;
    alert(`The result of ${num1} + ${num2} is: ${result}`);
} else if (operator === "-") {
    result = num1 - num2;
    alert(`The result of ${num1} - ${num2} is: ${result}`);
} else if (operator === "*") {
    result = num1 * num2;
    alert(`The result of ${num1} * ${num2} is: ${result}`);
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
        alert(`The result of ${num1} / ${num2} is: ${result}`);
    } else {
        alert("Division by zero is not allowed!");
    }
} else {
    alert("Invalid operator entered. Please use +, -, *, or /.");
}

var num1 = +prompt("Enter any number")
var num2 = +prompt("Enter any number")
if (num1 > num2) {
    document.write(`The greater number ${num1} and ${num2} is: ${num1}`)
}
else if (num2 > num1) {
    document.write(`The greater number ${num2} and ${num1} is: ${num2}`)
} else {
    document.write("Enter a number")
}

var num1 = +prompt("Enter any number")
var operator = prompt("Operators", "+,-,*,/")
var num2 = +prompt("Enter any number")
function cal(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2
    } else if (operator === "-") {
        return num1 - num2
    } else if (operator === "*") {
        return num1 * num2
    } else if (operator === "/") {
        return num1 / num2
    } else {
        document.write("Enter the value")
    }
}
document.write(cal(num1, num2, operator))