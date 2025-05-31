// shallowCopy hota hai jab ap kesi object ko copy karein with object assign ya spread k through lkn us k top props tu copy ho jate hn lkn nested object k props reference hi copy hote hn

const user = {
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

// let obj2 = {...user}

// obj2.address.houseNo = "120/55"

// console.log("user:", user.address.houseNo)
// console.log("obj2:", obj2.address.houseNo)


// // deepCopy first tareeka lkn recommended nahi hai use nahi karna

// let obj2 = JSON.parse(JSON.stringify(user))   //describe obj reference hai tu JSON.stringify is ko string main convert kare ga jis se ye primitive ban jae ga or JSON.pares is string ko wapis object main convert karde ga

// obj2.address.houseNo = "120/55"

// console.log("user:", user.address.houseNo)
// console.log("obj2:", obj2.address.houseNo)

// deepCopy second tareeka lkn recommended hai

const makeDeepCopy = (obj) => {
    if(typeof obj !== 'object' || obj === null) return obj;

    var copiedVal = Array.isArray(obj) ? [] : {};
    var keys = Object.keys(obj)

    for(var i=0; i<keys.length; i++){
        copiedVal[keys[i]] = makeDeepCopy(obj[keys[i]])
    }

    return copiedVal
}

let copy = makeDeepCopy(user)

console.log("user:", user.socialLinks.facebook)
console.log("copy:", copy.socialLinks.facebook = "Dev Aashir")
console.log(copy)