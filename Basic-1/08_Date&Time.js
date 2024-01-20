//Date => object

// date object represents milliseconds
// since the midnight at the beggining of january 1, 1970


// let myDate = new Date()
// console.log(myDate.toISOString()); //2024-01-13T07:26:01.210Z
// console.log(myDate.toJSON()); //2024-01-13T07:26:01.210Z
// console.log(myDate.toDateString()); //Sat Jan 13 2024
// console.log(myDate.toLocaleDateString()) //1/13/2024


//let myCreateDate = new Date(2023,0,23); // Mon Jan 23 2023 using toDatestring method //months start from 0(January)
//console.log(myCreateDate.toDateString())


//let myCreateDate = new Date(2023,0,23,5,3); // 1/23/2023, 5:03:00 AM USING tolocalString method
//console.log(myCreateDate.toLocaleString())

//let myCreateDate = new Date("2023-01-12"); // Thu Jan 12 2023 start from 01 in yy-mm-dd

//let myCreateDate = new Date("01-12-2023")
//console.log(myCreateDate.toLocaleString())  //1/12/2023, 12:00:00 AM

//let myTimeStam = Date.now();
//console.log(myTimeStam) //output in milli second
//console.log(myTimeStam.toLocaleString())  //1,705,132,229,214
//console.log(myCreateDate.getTime()) //1673481600000 //getTime gives the millisecond of time of date
//console.log(Math.floor(Date.now()/1000)); //convert tno seconds





let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth())
console.log(newDate.getDay());
console.log(newDate.getHours())



newDate.toLocaleDateString("default", 
{
    weekday: "long"
}

)