const obj1 = {
  firstName: "Aashir",
  lastName: "Siddiqui",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  getRoll: function () {
    return this.rollNo;
  },
};

// prototype inheritance

const obj2 = {
  rollNo: 2,
  __proto__: obj1,
};

const obj3 = {
  age: 18,
  __proto__: obj2,
};
console.log(obj3);

const animal = {
  eat: true,
};

const dog = Object.create(animal);
dog.bark = true;
console.log(dog.eat);

const arr1 = ["Hello World"];
console.log(arr1);

const object = new Object();
// console.log(Object.getPrototypeOf(object))
console.log(object.__proto__);

const arr2 = new Array();
console.log(arr2);

let x = 10;
console.log(
  x.__proto__.__proto__.__proto__
); /* x.__proto__ => Number x.__proto__.__proto__ => Object x.__proto__.__proto__.__proto__ => null */

class Student {
  constructor() {
    this.name = "Aashir";
  }
  getName() {
    return "Hey i am aashir";
  }
}

const s1 = new Student();
const s2 = { __proto__: Student.prototype };
console.log(s2.getName());

// custom proto

Array.prototype.show = function () {
  return this;
};

const cities = ["Karachi"];
console.log(cities.show());

Array.prototype.convertIntoObj = function () {
  let newObj = {};
  this.forEach((elem) => {
    newObj[elem] = elem;
  });
  return newObj;
};

console.log(cities.convertIntoObj());

function MyPrototype(name) {
  this.name = name;
}

MyPrototype.prototype = obj3;

const myProto = new MyPrototype("Ali");
console.log(myProto.getRoll());
