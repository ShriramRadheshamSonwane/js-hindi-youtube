// const userEmail = "shri3103@gmail.com"
// const userEmail = []

// if (userEmail) {
//     console.log(`User have this type of Email: {userEmail}`);
// }else{
//     console.log("User Don't have Email");

    
// }

// Falsy value

// false, 0 , -0, BigInt 0n , "", null, undefined, NaN

//truthy value

// "0",'false'," ",[],{}, function(){}

// if (userEmail.length ===0) {
//     console.log("Array is Empty");
// }

// const emptyObj ={}
// if (Object.keys(emptyObj).length===0) {
//     console.log("Object is empty");
    
// }

// Nullish Colesing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20
// console.log(val1);

// Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") :
console.log("more than 80");


