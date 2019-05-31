var nameVar = 'Matheus';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jenifer';
nameLet= 'Julie';
console.log('Namelet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

//Block scoping

const fullName = 'Matheus Binotto'
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);