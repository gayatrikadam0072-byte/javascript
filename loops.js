//forloop
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}


//whileloop
let i = 1;

while (i <= 5) {
  console.log("Count:", i);
  i++;
}


//dowhileloop
let a = 1;

do {
  console.log("Value:", a);
  a++;
} while (a <= 3);


//forofloop
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}


//forinloop
let student = { name: "Asha", age: 22, course: "B.Sc" };

for (let key in student) {
  console.log(key + ":", student[key]);
}


//breakcontinueloop
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; 
  console.log(i);
}




