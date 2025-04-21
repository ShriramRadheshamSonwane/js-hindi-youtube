const user = {
    username: "Shriram",
    peice: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Onkar"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username ="shriram"
//     console.log(this.username);
    
// }

// chai()
// const chai= function() {
//     let username ="shriram"
//     console.log(this.username);
    
// }

// chai()


// const chai= () => {
//     let username ="shriram"
//     // console.log(this.username);
//     console.log(this);
    
// }

// chai()

// const addtwo =(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(3,6));

// const addtwo =(num1,num2)=> num1+num2

// const addtwo =(num1,num2)=> (num1+num2) //implicit return

const addtwo = (num1,num2)=> ({username:"Shriram"})
console.log(addtwo(3,6));

const myArray = [2,5,3,7,8]
myArray.forEach()

