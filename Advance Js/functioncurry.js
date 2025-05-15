function add(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

console.log(add(5)(6)(4))


const sum = a => b => c => a + b + c

console.log(sum(5)(6)(4))


// function sendEmail(to){
//     return function(subject){
//         return function(message){
//             return console.log(`Sending email to ${to} with subject ${subject}: ${message}`)
//         }
//     }
// }

// let step1 = sendEmail('aashir217@gmail.com')
// let step2 = step1('New order confirmation')
// step2(`Hi Aashir your order in progress`)


const sendEmail = to => subject => message => console.log(`Sending email to ${to} with subject ${subject}: ${message}`)

let step1 = sendEmail('aashir217@gmail.com')
let step2 = step1('New order confirmation')
step2(`Hi Aashir your order in progress`)