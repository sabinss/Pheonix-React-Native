// // 123
// let array1 = [1, 2];
// // 345
// let array2 = [1, 2];

// let user = {
//   name: 'john',
//   key: 'value',
//   key: 'value',
//   key: 'value',
//   key: 'value',
//   key: 'value',
//   key: 'value',
//   key: 'value',
// };

// // {
// //     name:"john",
// //     address:'new address'
// // }

// //shallow copy , deep copy
// let newUser = { ...user };

// newUser.name = 'harry';

// console.log(newUser);
// console.log(user);

// // function , High order function , Promise

// console.log(array1 === array2);

// let product = {
//   name: 'mouse',
//   price: 100,
// };

// let product1 = {
//   name1: 'laptop',
//   price: 100,
// };

// let product2 = {
//   name2: 'charger',
//   price: 200,
// };

// let products = { ...product, ...product1, ...product2 };

// HOC

// find , map , filter reduce
let movies = [
  'The Fantastic Mr. Fox',
  'Mr. and Mrs. Smith',
  'Mrs. Doubtfire',
  'Mr. Deeds',
];

let movie = movies.find((movie) => {
  return movie.indexOf('Mr') === 0;
});

// //   includes ,indexOf
//   for(let m of movie){
//     console.log(m)
//   }

// callback
// let movie = movies.find((movie) => {
//   return movie.includes('Mr');
// });

console.log(movie);
