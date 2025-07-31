//declarationfunction
function greet() {
  console.log("Hello!");
}
greet(); 

//functionexpression
const sayHi = function() {
  console.log("Hi there!");
};
sayHi(); 

//arrowfunction
const add = (a, b) => a + b;
console.log(add(3, 4)); 

//anonymousfunction
setTimeout(function () {
  console.log("This runs after 1 second");
}, 1000);

//iife
(function () {
  console.log("IIFE runs automatically!");
})();

//constructorfunction
function Person(name) {
  this.name = name;
}
const p1 = new Person("Asha");
console.log(p1.name); 

//generatorfunction
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = generateNumbers();
console.log(gen.next().value); 






