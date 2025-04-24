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


Quantifiers
`*`          matches 0 or more occurrences.
`+`          matches 1 or more occurrences.
`?`          matches 0 or 1 occurrence.
`{n}`        matches exactly `n` occurrences.
`{n,}`       matches `n` or more occurrences.
`{n,m}`      matches between `n` and `m` occurrences.


Anchor	     Meaning	                With m flag
^	         Start of string	        Start of each line
$	         End of string	            End of each line
m	         (Not an anchor)            Enables multiline mode	^ and $ behave per line


Regex	            Matches	                                               Equivalent	                Example Match
\d	                Digit (0–9)	                                           [0-9]	                    '5'
\D	                Non-digit	                                           [^0-9]	                    'a', '@'
\w	                Word char (letter, digit, underscore)                  [A-Za-z0-9_]	                'A', '1', '_'
\W	                Non-word char	                                       [^A-Za-z0-9_]	            '!', ' ', '#'
\s	                Whitespace	                                           [ \t\n\r\f]	                ' ', '\n'
\S	                Non-whitespace	                                       [^\s]	                    'H', '7'


Feature                          Syntax             Description
Group                            (abc)              Group for repetition
Capturing Group                  (\w+)              Store and reuse
Non-Capturing Group              (?:abc)            No memory capture
Named Capture Group              (?<name>\w+)       Group with a name
Backreference Numbered           \1, \2             Refer to captured group
Backreference Named              \k<name>           Refer to named group

*/


let str1 = 'The RAIN in Spain';

let match1 = str1.match(/ain/gi).toString()

console.log(match1);

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

console.log("Number " + numbers.join(" "))
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


// Quantifiers

console.log(text.match(/[a-z]{3}/g))

console.log(text.match(/[a-z]{4,}/))

console.log(text.match(/[a-z]{5,10}/g))

let html = `<h1></h1<h2></h2<h3></h3>`

let empty = html.replace(/<\/?[^>]+>/g, match => {
    return match.startsWith("</") ? "</>" : "<>"
})

console.log(empty)

let asterisk = "ha haa haaa"

console.log(asterisk.match(/ha*/g).join(" "))

let plus = "ha haa haaa h hhhh"

console.log(plus.match(/ha+/g).join(" "))

let quesMark = "colour color colouur"

console.log(quesMark.match(/colou?r/g).join(" "))


// Anchors

let a1 = "Aashir Siddiqui"

console.log(a1.match(/^aashir/gi))

console.log(a1.match(/siddiqui$/gi))

let h1 = "hello"

console.log(h1.match(/^hello$/g))

let lines = `This is line one
this is line two`

console.log(lines.match(/^this/gm))

console.log(lines.match(/^this/gim))

console.log(lines.match(/one$/gm))

console.log(lines.match(/two$/gm))


// Find Valid Emails

let emails = `iamaashirsiddiqui@gmail.com
iamaashirsiddiqui101@gmail.com
iamAASHIRSIDDIQUI@gmail.com
@iamaashirsiddiqui@gmail.com
iam._.aashirsiddiqui@gmail.com
iam..aashirsiddiqui@gmail.com
iam_aashirsiddiqui@gmail.com
iamaashirsiddiqui001@gmail.com
iamaashirsiddiqui@.com
iamaashirsiddiqui..com
iamaashirsiddiqui@gmail
`

const testEmails = (/^[A-Za-z0-9]+(?:[._][A-Za-z0-9]+)*@[A-Za-z]+\.[A-Za-z]{2,}$/)

let results = emails.split('\n').map(email => {
    return{
        email : email,
        valid : testEmails.test(email)
    }
})

console.log(results)

let validEmail = results.filter(e => e.valid).map(e => e.email)
console.log("Valid Emails \n" + validEmail.join('\n'))


// Predefined/Shorthand Character Classes

console.log(text.match(/\d/g))

console.log(text.match(/\D/g))

console.log(text.match(/\w/g))

console.log(text.match(/\W /g))

console.log(text.match(/\s/g))

console.log(text.match(/\S/g))


// Alternation

let alt = "Mere pass red car aur black car hai"

console.log(alt.match(/(red|blue|black) car/g))


// Groups and Capturing

let g1 = "hihihi"

console.log(g1.match(/(hi)+/g))

let g2 = "hello hello"

console.log(g2.match(/(\w+)\s\1/g))

let g3 = "apple mango"

console.log(g3.match(/(?: banana|apple) mango/g))

let g4 = "2025-04-25"

let g4Match = /(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})/

let g4Result = g4.match(g4Match)

console.log(g4Result.groups)

let g5 = "Aashir Siddiqui"

let g5Match = /^(?<firstName>[A-Z][a-z]+)\s(?<lastName>[A-Z][a-z]+)/

let g5Result = g5.match(g5Match)

console.log(g5Result.groups)
console.log(g5Result.groups.lastName)

let g6 = "WORLD world"

console.log(g6.match(/(?<word>\w+)\s\k<word>/gi))