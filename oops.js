//encapsulation
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const p1 = new Person("Asha", 21);
p1.displayInfo(); 

//abstraction
class Car {
  constructor() {
    this.speed = 0;
  }

  start() {
    this.#engineStart(); // private method
    console.log("Car started");
  }

  #engineStart() {
    console.log("Engine started internally...");
  }
}

const c1 = new Car();
c1.start(); 

//inheritance
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak(); 
d.bark();  

//polymorphism
class Animal {
  sound() {
    console.log("Some sound");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Woof");
  }
}

const a1 = new Cat();
const a2 = new Dog();

a1.sound(); 
a2.sound(); 

//basicoops
const student = {
  name: "Asha",
  age: 21,
  greet: function () {
    console.log("Hi, I'm " + this.name);
  }
};

student.greet(); 



