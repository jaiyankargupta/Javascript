// classifications of data type is based on what types of data is to be stored and how to stored and how to manuplate the data. 
// 01. Primitive data type
// 7 types : String , Number , Boolean , null(Empty) , undefined , Symbol , BigInt , 

// js is a dynamically typed 

const score = 10;
const isLoggedIn = false;
const outsideTemp = null;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id==anotherId);

const bigNumber = 123542788917229176542n // convert into bigInt by using (n)
console.log(bigNumber)

// 02. Reference (NON-PRIMITIVE)

// Array, Objects , Functions

const heros = ["Shaktiman" , "nagraj", "doga"];
{
    name:"Rahul";
    age: 20;

}
const myFunction = function(){
    console.log("Hello JavaScript");
}
console.log(myFunction)


// type of different data types
// 1. number -> number 
// 2. Null -> Object
// 3. function -> function object
// 4. undefined -> undefined 
// 5. boolean -> boolean