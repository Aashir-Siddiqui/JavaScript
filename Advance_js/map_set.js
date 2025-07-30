"use strict";

//set

// 🔸 Kya hai:
// Set ek aisi collection hai jo unique values rakhta hai. Values kisi bhi type ki ho sakti hain.

// ✅ Features:
// Duplicates allow nahi hain.

// Values ka order maintain hota hai (insertion order).

let arr = [1, 2, 3, 4];

let obj = new Set(arr);

obj.add(5);

// obj.add(5);   // add nahi ho ga kyun k set unique value add karta hai duplicate nahi

obj.delete(5);

let obj1 = { name: "Aashir" };

obj.add(obj1);

console.log(obj);

for (let new1 of obj) {
  console.log(new1);
}

obj.forEach((elem) => {
  console.log(elem);
});

//map

// 🔸 Kya hai:
// Map ek aisi collection hai jisme key-value pairs hote hain. Yeh keys kisi bhi type ke ho sakte hain (string, number, object, function, etc.)

// ✅ Features:
// Order maintain hota hai (insertion order).

// Keys primitive ya object kuch bhi ho sakte hain.

let myMap = new Map([
  ["name", "Siddiqui"],
  ["age", 10],
]);

myMap.set("age", 18); // overwrite age value map value ko overwrite kar deta hai

console.log(myMap);

for (let [key, value] of myMap) {
  console.log(`key ${key}: value ${value}`);
}

myMap.forEach((key, value) => {
  console.log(`key ${key}: value ${value}`);
});

// weak set

// 🔸 Kya hai:
// WeakSet mein sirf objects hi values ho sakte hain, aur wo values weakly held hoti hain.

// Only objects allowed.

// No duplicates.

// Garbage collected agar object kahin use nahi ho raha ho.

// No size, no iteration.

let myWS = new WeakSet();

let ob1 = { name: "Bhupindar" };

myWS.add(ob1);

console.log(myWS);

let processedObjects = new WeakSet();

function process(obj) {
  if (processedObjects.has(obj)) {
    console.log("Already processed");
    return;
  }

  processedObjects.add(obj);
  console.log("Processing", obj);
}

let task = { id: 1 };
process(task); // Processing
// process(task); // Already processed

// weak map

// 🔸 Kya hai:
// WeakMap bhi key-value store hai lekin keys sirf objects hi ho sakte hain, aur yeh memory-friendly hota hai.

// ✅ Features:
// Only objects allowed as keys.

// Keys weakly held hoti hain — agar object key kahin aur reference mein nahi hai, to garbage collect ho jata hai.

// No size property, no iteration.

let myWM = new WeakMap();
let user = { name: "Ali" };

myWM.set(user, "Token: xyz123");

console.log(myWM);
