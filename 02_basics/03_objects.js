//singleton

// Object.create

//object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Shriram",
    "full name": "Shriram sonwane",
    [mySym]   :"mykey1",
    // mySym:"mykey1",
    age: 22,
    location : "Nashik",
    email:"sonwaneshriram@gmail.com",
    isLoggeedIn: false,
    LastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser["mySym"]);
// console.log(JsUser[mySym]);
// console.log(typeof(JsUser[mySym]));
// console.log(typeof([mySym]));


JsUser.email = "bablu@gmail.com"
// Object.freeze(JsUser)
JsUser.email ="Monty@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);
    
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
// console.log(JsUser.greeting);


// myArray =[]