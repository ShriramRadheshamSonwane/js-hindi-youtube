//Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2025, 3, 18 )
// let myCreatedDate = new Date(2025, 3, 18 , 5, 3)
let myCreatedDate = new Date("04-18-2025")
// let myCreatedDate = new Date("2025-04-18")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate =new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time`


newDate.toLocaleString('default',{
    weekday: "long",
    // timeZone: ''
})

