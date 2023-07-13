// // let number = [1, 2, 3];
// // let sum = 6;

// // for (let num of number) {
// //   console.log(num);
// //   sum = num + sum;
// // }

// // let average = sum / number.length;
// // // for (let i = 0; i < number.length; i++) {
// // //   console.log(number[i]);
// // // }

// // // // for of
// // // let subreddits = ['soccer', 'popheads', 'cringe', 'books'];

// // // for (let sub of subreddits) {
// // //   console.log(sub);
// // // }

// // // for (let i = 0; i < subreddits.length; i++) {
// // //   console.log(subreddits[i]);
// // // }

// // let student = {
// //   firstName: 'John',
// //   exam: {
// //     firstTerm: 100,
// //     secondTerm: 50,
// //     finalTerm: 40,
// //   },
// // };

// // const { firstName } = student;
// // (student.exam.firstTerm + student.exam.secondTerm + student.exam.finalTerm) / 3;
// const shoppingCart = [
//   {
//     product: 'Jenga Classic',
//     price: 6.88,
//     quantity: 1,
//   },
//   {
//     product: 'Echo Dot',
//     price: 29.99,
//     quantity: 3,
//   },
//   {
//     product: 'Fire Stick',
//     price: 39.99,
//     quantity: 2,
//   },
//   {
//     product: 'new Product',
//     price: 100,
//     quantity: 1,
//   },
// ];

// let totalPrice = 0;
// for (let item of shoppingCart) {
//   const { price, quantity } = item;
//   totalPrice = totalPrice + price * quantity;
// }

// console.log(totalPrice);

// // function

// function add(a, b) {
//   return a + b;
// }

// const add = (a, b) => {
//   // this
//   return a + b;
// };

// add(2, 4);

let name = true;
let name2 = true;
console.log(name === name2);

let nums = [1, 2, 3];
let mystery = [1, 2, 3];

console.log(nums === mystery);

let user = {
  name: 'john',
  notification: [],
};

// primitive type null Boolean, string, number

// passby value pasy by reference

if (user.notification === []) {
  console.log('no notification');
}

// function  high order function , Promise, asyn await
