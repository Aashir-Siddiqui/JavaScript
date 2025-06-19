class User {
    constructor(name, age) {
        this.userName = name;
        this.userAge = age;
        console.log("Constructor Function");
    }

    hello() {
        console.log(`My name is ${this.userName} and I am ${this.userAge} years old.`);
    }

    static staticMethod() {
        console.log("Static Function");
    }
}

let abc = new User("Aashir", 17);
console.log(abc);
abc.hello();
User.staticMethod();


// Employee - Manager Inheritance Example

class Employee {
    constructor(name) {
        this.name = name;
        console.log(`Constructor: Employee ${name}`);
    }
}

class Manager1 extends Employee {
    constructor(name, age) {
        super(name);
        this.age = age;
        console.log(`Constructor: Manager ${name} is ${age}`);
    }
}

let x = new Manager1("Aashir", 18);
console.log(x);


class Employees {
    constructor(name, age, salary) {
        this.employeeName = name;
        this.employeeAge = age;
        this.employeeSalary = salary;
        console.log(`Constructor: Employee`);
    }

    info() {
        document.write(`
            <h2>Employee Class</h2>
            Name : ${this.employeeName} <br>
            Age : ${this.employeeAge} <br>
            Salary : ${this.employeeSalary} <br>
        `);
    }
}

class Manager extends Employees {
    info() {
        let bonus = 10000;
        let totalSalary = this.employeeSalary + bonus;
        document.write(`
            <h2>Manager Class</h2>
            Name : ${this.employeeName} <br>
            Age : ${this.employeeAge} <br>
            Salary : ${totalSalary} <br>
        `);
    }
}

class GM extends Manager {
    info() {
        let bonus = 10000;
        let travelAllowance = 20000;
        let GMSalary = this.employeeSalary + bonus + travelAllowance;
        document.write(`
            <h2>GM Class</h2>
            Name : ${this.employeeName} <br>
            Age : ${this.employeeAge} <br>
            Salary : ${GMSalary} <br>
        `);
    }
}


let a = new GM("Ahmed", 22, 40000);
// a.info();

let b = new Manager("Aashir", 17, 40000);
// b.info();

let c = new Employees("Ali", 20, 40000);
c.info();


// Encapsulation

class Person {
    constructor(name, age) {
        let _age = age

        this.name = name

        this.getAge = () => {
            return _age
        }

        this.setAge = (newAge) => {
            if (newAge > 0) {
                _age = newAge
            } else {
                console.log('Invalid Age')
            }
        }
    }
}

let p1 = new Person('Naveed', 22)
console.log(p1.name)
console.log(p1.getAge())
p1.setAge(21)
console.log(p1.getAge())


// Abstraction 

class Car {
    #startEngine(){
        console.log("Engine Start")
    }

    drive(){
        this.#startEngine()
        console.log('Car is moving')
    }
}

let c1 = new Car()
c1.drive()


// Polymorphism 

class Animal {
  sound() {
    console.log("Some animal sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}

const animals = [new Dog(), new Cat()];

animals.forEach(animal => animal.sound());

class Peoples {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greet(){
        if(this.age === undefined){
            console.log(`Hello ${this.name}`)
        }else{
            console.log(`Hello ${this.name} you'r ${this.age} yrs old.`)
        }
    }
}

const p2 = new Peoples('Ali')
p2.greet()

const p3 = new Peoples('Ali', 20)
p3.greet()