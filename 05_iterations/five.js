const coding =["js","ruby","java","python","cpp"]
// coding.forEach( function (val){
//     console.log(val);
// })`
// coding.forEach( (val)=>{
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

const myCoding = [
    {
    languageName:"javaScript",
    lagauageFileName:"js"
    },
    {
    languageName:"object oriented programming",
    lagauageFileName:"cpp"
    },
    {
    languageName:"python",
    lagauageFileName:"py"
    }
]
myCoding.forEach((item) => {
    console.log(item.lagauageFileName);
    console.log(item.languageName);
    
});