// array -> object
// storing a collection of multiple items under a single variable
//Array are Resizable and can contain a mix of different data types



const myArr = [0,1,2,3,4,5,true,"Rahul"];
const myArr1 = new Array(1,2,3,4,5);
//console.log(myArr[2]);

//Array Method

//myArr.push(6); //add in the last
//myArr.pop(); //delete last element 

//myArr.unshift(9); //shift the all elements and add 9 on the 1st
//myArr.shift()    //remove the 1st element

//console.log(myArr.includes(9)); //true or false
//console.log(myArr.indexOf(19)); //tell the index at 19 (-1 indicates the index which is not available)


//const newArr = myArr.join() //convert the myArr into string
//console.log(newArr);
//console.log(typeof(newArr)) // string 



//slice, splice

//console.log("A",myArr);

const myn1 = myArr.slice(1,3); //not change the actual array
//console.log(myn1);

//console.log("B",myArr);

const myn2 = myArr.splice(1,3); // 1 to 3 index element myarr se gayab kar deta hain

//console.log(myArr);




// ################################################   //


const marvel_heroes = ["thor","IronMan", "Spiderman"];
const dc_heroes = ["Superman","flash","batman"];

//marvel_heroes.push(dc_heroes); //add the dc_heroes in marvel_heroes as a element, when we access the element of marvel_element then we use index at dc_heroes then we give the index
//console.log(marvel_heroes[3][2]);
//console.log(marvel_heroes); 

//const all_heroes = marvel_heroes.concat(dc_heroes); //concat is not effect the array of marvel_heroes
//console.log(all_heroes);


//const all_heroes = [...marvel_heroes, ...dc_heroes]; // we can add more than 2 array by spread
//console.log(all_heroes);


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_anotherArray = anotherArray.flat(Infinity); // [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]
//console.log(real_anotherArray);

 
//console.log(Array.isArray('HITESH')); //CHECK 
//console.log(Array.from("Hitesh")); //Hitesh ko array me convert kar do
console.log(Array.from({name: "hitesh"})); //its convert the specific type of data(name) into string, if he is not able to convert the it return empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));// convert into array 