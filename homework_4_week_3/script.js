let person1 = { name: "Alice", age: 25 };
let person2 = { ...person1, favoriteColor: "blue" };

// let person1 = { name: "Alice", age: 25 };
// let person2 = JSON.parse(JSON.stringify(person1));
// person2.favoriteColor = "blue";

console.log("Original:", person1); // { name: "Alice", age: 25 }
console.log("Copy:", person2);     // { name: "Alice", age: 25, favoriteColor: "blue" }



function introduceYourself(name, favoriteHobby) {
    console.log(`My name is ${name} and my favorite hobby is ${favoriteHobby}.`);
}

introduceYourself("Bob", "football");



What are the primitive types in JS ?
Primitive types are the basic data types:

1. String – text
let name = "Bob";

2. Number – integer or float
let age = 30;

3. Boolean – true or false
let isStudent = false;

4. Undefined – a variable declared, but not assigned
let x; // undefined

5. Null – intentional absence of value
let data = null;

6. BigInt – large integers beyond Number limits
let big = 123456789012345678901234567890n;

7. Symbol – unique identifier
let id = Symbol("id");


When should you use an object ?
Use an object when you need to group related data using named keys (properties)

let user = { name: "Bob", age: 30 };
Ideal for representing structured data(like entities or configurations)


When should you use an array ?
Use an array when you need an ordered collection of items accessed by index

let colors = ["red", "green", "blue"];
Best for lists, sequences, or collections of similar items
