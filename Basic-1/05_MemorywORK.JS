// stack m/y(primitive) and heap m/y(non-primitive)

let myYoutubename = "NITIAN";

let anotherName = myYoutubename;
anotherName = "Rahul";

// primitive data types me varibales name aur uski value bhi store hoti hain
//yaha pe anothername ko myYoutubename value ki coy di gyi hain jise baad me change kar sakte hain


let userOne = {
    email: "rahul@gmail.com",
    upi: "jaiyankargupta@paytm",
}

let userTwo = userOne;
userTwo.email = "Jaiyankargupta@gmail.com";

console.log(userOne);
console.log(userTwo)

//Non - primitive data me variable name stack me aur value heap me store hota hain
// useOne reference karta hain heap waali value ko aur yadi userTwo ko bhi wo hi value de de to wo bhi reference hi karega aur jab ham userTwo ya for UseOne se kisi ki value change karenge ko wo original me change hoga
