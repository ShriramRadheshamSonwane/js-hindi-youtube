// primitive

//  7 types :  String , Number , Boolean , null ,undefined , Symbol ,BigInt

const score = 100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3245888944218887n


// Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "Shriram",
    age: 22,

}
const myfunction=function(){
    console.log("Hello world");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof userEmail);
// console.log(typeof anotherId);
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myfunction);


//  ++++++++++++++++++++++++++++++++++++++++

//stack (Primitive) , Heap (Non-primitive)

let myYoutubename ="ShriramRadheshamSonwanedotcom"


let anothername = myYoutubename
anothername ="OnkarRadheshamSonwane"

console.log(myYoutubename);
console.log(anothername);
