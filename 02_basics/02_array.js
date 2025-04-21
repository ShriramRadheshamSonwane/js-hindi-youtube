const marvelHeros =["thor","Ironman","spiderman"]
const dcHero =["suparman","flash","batman"]

// marvelHeros.push(dc)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeroes = marvelHeros.concat(dcHero)
// console.log(allHeroes);

// const all_new_heros = [...marvelHeros,...dcHero]

// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,8,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Shriram"));
console.log(Array.from("Shriram"));
console.log(Array.from({name:"Shriram"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

