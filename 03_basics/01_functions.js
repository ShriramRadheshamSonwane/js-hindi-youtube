function sayMyName(){
    console.log("S");
    console.log("R");
    console.log("H");
    console.log("R");
    console.log("I");
    console.log("R");
    console.log("A");
    console.log("M");
}
// sayMyName()


// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
    
// }

//function addTwoNumbers(number1,number2){
    // let result = number1+number2
    // return result
 //   return number1 + number2
  // console.log("Shriram");
    
//}
// const result = addTwoNumbers(3,5)

// console.log("Result:",result);

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please Enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please Enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Shriram"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2));
// function calculateCartPrice(...num1){     //rest operator=...
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500));

// function calculateCartPrice(val1 , val2 , ...num1){     //rest operator=...
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500,2000,541));

const user = {
    username: "shriram",
    price:199
}

function handleObject(anyobject){
    console.log(`Usename is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(4user)
handleObject({
    username: "Onkar",
    price:299
})

const myNewArray =[200, 400, 600, 100,500]

function returnSeconValue(getArray){
    return getArray[1]
}
console.log(returnSeconValue(myNewArray));




