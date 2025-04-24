/*

Pattern	     Description
^abc	     Line/string must start with abc
abc$	     Line/string must end with abc
^abc$	     Line must be exactly abc
/abc/g	     Find all abc in string
/abc/i	     Match abc ignoring case
/^abc/m	     Match abc at start of any line    


Flag	   Name	                   Kaam kya karta hai
g	       Global	               Sab matches dhoondta hai
i	       Ignore Case	           Case (capital/small) ko ignore karta hai
m	       Multiline	           ^ aur $ ko har line ke hisaab se treat karta hai
s	       DotAll	               . ab newline (\n) bhi match karega
u	       Unicode	               Unicode chars (emojis, Arabic, etc.) ko handle karta
y	       Sticky	               Match exact position se start ho

*/


let str1 = 'The RAIN in Spain';

let matach1 = str1.match(/ain/gi).toString()

console.log(matach1);

let str2 = `The rain in Spain
stays mainly in the plain.`;

let match2 = str2.match(/^stays/m)

console.log(match2);

let match4 = str2.match(/Spain$/m)

console.log(match4)

let str5 = 'The rain\nin Spain';
let match5 = str5.match(/rain.in/s).toString()
console.log(match5);


let text = `Hello, world! This is a sample paragraph for testing character classes in regex.
It includes: uppercase letters (A-Z), lowercase letters (a-z), digits (0-9), and special characters.

Here's a mix of different character types:
– abcdefgHIJKLMNOPqrstuvWXYZ
– 1234567890
– !@#$%^&*().-_=+{}[]:;<>,.?/\
– Unicode characters: 😁, 😎, 🤓, 😍, 🥳, 🙋‍♀️

Use this text to practice regex patterns and character classes.
Have fun with your regex learning journey!

😁
`

console.log(text.match(/[0-9A-Z]/g).join(" "))

console.log(text.match(/[^0-9A-Za-z \s]/g).join(" "))

console.log("Text without vowels " + text.match(/[^aeiou\s]/gi).join(" "))

console.log("Text without vowels length " + (text.match(/[^aeiou]/gi) || []).length)

// Find Constant
let constant = text.match(/[bcdfghjklmnpqrstvwxyz]/gi)

console.log("Constant " + constant.join(" "))
console.log(constant.length)

// Find Vowel
let vowels = text.match(/[aeiou]/gi)
console.log("Vowels " + vowels.join(" "))
console.log(vowels.length)

// console.log((text.match(/[aeiou]/gi) || []).length);

// Find Numbers
let numbers = text.match(/[0-9]/g)

console.log("Number "+ numbers.join(" "))
console.log(numbers.length)

// Find SpecialCharacters
let specialCharacters = text.match(/[^0-9a-z\s]/gi)

console.log("SpecialCharacters " + specialCharacters.join(""))
console.log(specialCharacters.length)

let spaces = text.match(/\s/g)
console.log(spaces)
console.log(spaces.length)

// Find Emojis
const emojis = text.match(/[\u{1F600}-\u{1F64F}]/gu);
console.log("Emojis →", emojis.join(" "));

console.log(text.match(/[a-z]{3}/g))

console.log(text.match(/[a-z]{4,}/))

console.log(text.match(/[a-z]{5,10}/g))