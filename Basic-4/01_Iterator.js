//for

// let myarray = ["Rahul", "Shyam", "Deepak"];

// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element)
    
// }






//while(condition){
    //code
    //updation
//}






// do{

//code
//updation
    
// }while(condition);




//for of 

// const arr = [1,2,3,4,5]
// for (const nums of arr) {
//     console.log(nums);
    
// }



//Maps -> use for remove dulicates

const map = new Map()
map.set("In","India")
map.set("USA","united states of America")
map.set("In","India")
//onsole.log(map)

for (const [key,value] of map) {
    //console.log(key,value);
    
}


//forin


const myobject = {
    "game1":"NFS",
    "game2" :"Spiderman"
}

//for (const [key,value] of myobject) {
    //console.log(key,value);      //myobject is not iterable
    
//}



for (const key in myobject) {
    
    //console.log(`${key} for ${myobject[key]}`)
}


const prog = ["js","c++","c","python"]

for (const key in prog) {
    //console.log(prog[key]);
}



//forEach

const coding = ["js","c","cpp","rust"]
coding.forEach(function(value){
    //console.log(value);
})

coding.forEach((value)=>{
    //console.log(value);
})


function printMe(item){
    //console.log(item);
}
coding.forEach(printMe)


coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
})





const mycoding = [
    {
        langName: "Java",
        langFileName: "classname"

    },
    {
        langName: "cpp",
        langFileName: "cpp"
    }
]

mycoding.forEach((item)=>{
    //console.log(item.langFileName);
})




// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item;           //foreach doesn't return
// })

// console.log(values);



const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.filter((nums)=> nums>4)
// console.log(newNums);

const newNums = myNums.filter((nums)=> {
    return nums>4
})
//console.log(newNums);


const newNum = []
myNums.forEach((nums)=>{
    if(nums>4){
        newNum.push(nums)
    }
})
//console.log(newNum);


//const num1 = [1,2,3,4,5,6,7,8,9,10]
// const result = num1.map((val)=> val+10)

//const result=[]
//  num1.forEach((val,index,arr)=>{
//     result.push(val+10);
// })
//console.log(result);

//const result = num1.map((num)=> num*10).map((num)=>num+10).filter((num)=> num>=40);
//console.log(result);





//Reduce Function



const num2 = [1,2,3,4,5,6,7,8,9,10];
const num3 = num2.reduce((acc,curval)=>acc+curval,0)
console.log(num3);