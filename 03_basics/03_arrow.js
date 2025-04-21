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

function chai(){
    let username ="shriram"
    console.log(this);
    
}

chai()



