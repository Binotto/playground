//Arguments Object
// const firstAdd = function (a, b) {
//     console.log(arguments)
//     return a + b;
// };
// console.log(firstAdd(55, 1, 1001));

//Arguments Object -  no longer bound with arrow function
const secondAdd = (a, b) => {
    //console.log(arguments)
    return a + b;
};
console.log(secondAdd(55, 1));


// this keyword - no longer bound 
// const user = {
//     name: 'Matheus',
//     cities: ['New York', 'Philadelphia', 'Dallas', 'Dublin'],
//     printPlacesLived() {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' Has lived in ' + city)
//         })
//     }
// };

//map method
// const user = {
//     name: 'Matheus',
//     cities: ['New York', 'Philadelphia', 'Dallas', 'Dublin'],
//     printPlacesLived() {
//         return this.cities.map((city) => {
//             return this.name + ' has lived in ' + city + '!';
//         });
//     }
// };
const user = {
    name: 'Matheus',
    cities: ['New York', 'Philadelphia', 'Dallas', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy );
    }

    //numbers - array of numbers
    //multiplieBY - single number
    //multiply - return a new array where the numbers have been multipĺied
};

console.log(multiplier.multiply())