//Object literal se singleton nhi banta hain aur constructor se singleton bnta hain

// object declare with 2 method (literal and constructor)


// ++++++++++++++++  object literals ++++++++++++++++++++





const mySym = Symbol("key1") //take a symbol variable and assign it then use as a key 

/*const JsUser = {
   name: "Hitesh", //key: value and key is a also a string but no need to declare, it understand 
   [mySym]: "mykey1", // [mysum] is a symbol type and if when we use mysum, it is a string 
   age: 18,
   location: "Bihar",
   isLoggedIn: false,
   LastLogininDays:[ "MONDAY"]
}*/

//console.log(JsUser.LastLogininDays);
//console.log(JsUser["age"]); // we can access the age by this method also because whenever we access the data  
//JsUser.location = "Haryana";
//console.log(JsUser["location"])

//Object.freeze(JsUser) //make immutuble
//JsUser.location = "Punjab"; //not change because jsUser Object is freeze

//JsUser.greeting = function(){
    //console.log("Hello JS user");
//}

//console.log(JsUser.greeting);

//JsUser.greetingTwo = function(){
    //console.log(`Hello World ${this.name}`)
//}

//console.log(JsUser.greeting());
//console.log(JsUser.greetingTwo());





// +++++++++++++++++ Constructor ++++++++++++++++++


//const tinderuser = new Object() //singleton object


/*
const tinderuser = {}; //non-singleton object
tinderuser.id = "1234";
tinderuser.name = "Rahul";
tinderuser.isLoggedIn = false;

console.log(tinderuser);

console.log(Object.keys(tinderuser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser)) //[ [ 'id', '1234' ], [ 'name', 'Rahul' ], [ 'isLoggedIn', false ] ]
console.log(tinderuser.hasOwnProperty("isLogged")) //false
*/



/*
const regularUser = {
    email: "rahul@gmail.com",
    fullname: {
        username:{
        firstname: "Rahul",
        lastname: "Kumar",
        }
    }
    
}
console.log(regularUser.fullname.username.firstname);
*/

const obj1 = {1:"a", 2:"b"}
const obj2 = {3: "a",4: "b"}

//const obj3 = Object.assign({},obj1,obj2); //merge the objects  ({} -> target )
const obj3 = {...obj1,...obj2};

//console.log(obj3);

const users = [
    {
        id:1,
        email: "jaiyankargupta",

    },
    {
        id:1,
        email: "jaiyankargupta",

    },
    {
        id:1,
        email: "jaiyankargupta",

    },
    {
        id:1,
        email: "jaiyankargupta",

    }
]

//console.log(users[1].email)