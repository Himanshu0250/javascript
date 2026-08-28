const marvel_heros = ["thor" , "Ironman", "spiderman"]
const dc_heros = ["superman" , "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros)// output [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] here the dc_heros array stor as a element in the marvel_heros
console.log(marvel_heros.length)// output will 4 
console.log(marvel_heros[3][1])// output will be flash

// second method which we can use here 

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)// output will be the [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman']

// another method spreadout

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman'].  output will be this 



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);// output will be the [1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5]


console.log(Array.isArray("Hitesh"))// output will be false because it is not array
console.log(Array.from("Hitesh"))// output will be [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) //interesting output will be []




let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));// method to convert many variable in array and output will be [ 100, 200, 300 ]