// +++++++ this Keyword +++++++++

const user = {
    username: "Hitesh",
    price: 999,

   welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`);
    console.log(this); 
    
    //this is denoting context of user
    /* {
        username: 'Hitesh',
        price: 999,
        welcomeMessage: [Function: welcomeMessage]
      }
      */
}
}
// user.welcomeMessage()
// user.username = "Rahul"
// user.welcomeMessage()
//console.log(this); //It denote empty object because it is a global type this







// function chai(){
//     let username = "Rahul"
//     console.log(this);
//     console.log(this.username); // undefined because it is use in object

// }

// chai()





// +++++++++++++ Arrow Function +++++++++++



const chai = () => {
    let username = "Rahul";
    console.log(this.username);   //undefined
}
//chai()


// exlicit return 


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3,4));



//implicit return


// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(3,4));

const addTwo = (num1, num2) => ({username: "jaiyankargupta"})
console.log(addTwo(3,4));





