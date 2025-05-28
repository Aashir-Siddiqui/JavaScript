// shallowCopy hota hai jab ap kesi object ko copy karein with object assign ya spread k through lkn us k top props tu copy ho jate hn lkn nested object k props reference hi copy hote hn

const obj = {
    name: "Aashir",
    age: 18,
    address: {
        houseNo: "22/129",
        road: "rashid minhas road"
    },
    socialLinks:{
        facebook: "Aashir Siddiqui",
        github: "Aashir-Siddiqui",
        insta: "@aashirsiddiqui_"
    }
}

// let obj2 = {...obj}

// obj2.address.houseNo = "120/55"

// console.log("obj", obj.address.houseNo)
// console.log("obj2", obj2.address.houseNo)


// deepCopy first tareeka lkn recommended nahi hai use nahi karna

let obj2 = JSON.parse(JSON.stringify(obj))   //describe obj reference hai tu JSON.stringify is ko string main convert kare ga jis se ye primitive ban jae ga or JSON.pares is string ko wapis object main convert karde ga

obj2.address.houseNo = "120/55"

console.log("obj", obj.address.houseNo)
console.log("obj2", obj2.address.houseNo)