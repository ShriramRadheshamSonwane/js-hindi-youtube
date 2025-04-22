//Immediately Invoked Function Expressions (ITFE)

(function chai(){
    console.log("DB is connected");    
})();

// (('name') => {
//     console.log("DB is connected two");
// }) ()
((name) => {
    console.log(`DB is connected two ${name}`);
}) ('Shriram')