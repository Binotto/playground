const obj = {
    name: 'Matheus',
    getName(){
        return this.name;
    }
};

//const getName = obj.getName.bind(obj);
const getName = obj.getName.bind({ name: 'Matheus' });

console.log(getName());