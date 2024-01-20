// Immediately Invoked function expressions (IIFE)

// global scope ki pollution se problems hoti hai uske varibale ke wajah se us problems ki hatane ke liye IIFE use karte hain

(function chai(){
    console.log(`DB connected`);
})();   // (;) for the end of code




( () => {
    console.log("Hello")
}  

)();




( (name) => {
    console.log(`${name}`)
}
)("Rahul")





// ++++++++++ TYPES OF VALUE +++++++++++

// Falsy values (false, 0 , -0, BigInt, 0n, null , "", undefined, NaN)

//Truly Vlaue ("false", " ", "0", [], {}, function(){},  )



//Nullish Caolescing Operator (??) : null undefined
 val1 = 5 ?? 10             // 5
 val2 = null ?? 10         // 10
 val3 = undefined ?? 15    // 15
 val4 = null ?? 10 ?? 20   //10



 // +++++++++ Ternary operator ++++++++


 //condition ?? true : false