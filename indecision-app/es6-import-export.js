///////////////////////////////////////////////////////////////////////////////////
//app.js
// import './utils.js'
// import anythingIWant,{ square, add } from './utils.js';
// console.log('app.js is running ');
// console.log(square(7));
// console.log(add(7, 7));
// console.log(anythingIWant(700,7));

//Default
import isSenior, { isAdult, canDrink } from './person.js';

console.log(isAdult(25));
console.log(canDrink(25));
console.log(isSenior(65))
/////////////////////////////////////////////////////////////////////////////////////
//person.js
// export const isAdult = (age) => age >= 18;
// export const canDrink = (age) => age >= 18;
//////////////////////////////////////////////
const canDrink = (age) => age >= 18;
const isAdult = (age) => age >= 21;
const isSeniorCitizen = (age) => age >= 65;
       
export{ canDrink, isAdult, isSeniorCitizen as default};
//////////////////////////////////////////////////////////////////////////////////////
//utils.js
console.log('utils.js is running');
       
export const square = (x) => x * x;
       
export const add = (a, b) => a + b;
       
export default (a, b) => a - b;
       
       