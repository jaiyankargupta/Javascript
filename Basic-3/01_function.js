// function userId(){
//      console.log("Hello");
// }

  
// function userId(username){ //parameter
//     return username; //after return nothing will execute
// }

// const print = userId("Hitesh"); //argument
// console.log(print);

function CalculateCartPrice(...num1) {
  return num1;
}
const answer = CalculateCartPrice(122, 234, 1200);
let result = 0;
for (let index = 0; index < answer.length; index++) {
  result = answer[index] + result;
}
//console.log(result);

// ++++++++++ Scoping +++++++++++

function one() {
  const username = "jaiyankargupta";
  function two() {
    const website = "YouTube";
    console.log(username);
  }
  //console.log(website);
  //two();
}

//one();

// ++++++= intresting +++++

// two method to write functions in js 

//1.

console.log(one()); //we can acess the result of two function
function one(){
    console.log("Jaiyankargupta");
}


//2
console.log(two());    //two is not defined
const store = function two(){
    console.log("jaiyankargupta");
}