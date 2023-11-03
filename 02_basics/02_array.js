const marvel_heroes = ["Ironman","Thor","Spyderman"]
const dc_heroes = ["Superman","Batman","Wonder women"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

concat_heroes = marvel_heroes.concat(dc_heroes)
console.log(concat_heroes);

// newHeroes = [...marvel_heroes, ...dc_heroes]
// console.log(newHeroes);

const another_array = [3,5,[1,4],4,[9,8,[1,2,3],2,6],4]

// real_array = another_array.flat(Infinity)
// console.log(another_array);
// console.log(real_array);


console.log(Array.isArray("ABHI"));
console.log(Array.from("ABHI"));
console.log(Array.from({name: "ABHI"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


