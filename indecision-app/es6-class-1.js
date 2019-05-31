class Person{
    constructor(name = 'Matheus Developer Web', age = 0) {
        //this.name = name || Matheus Developer WEB;
        this.name = name;
        //this.age = age || 0;
        this.age = age;
    }
    getGreeting() {
        //return 'Hi, i am ' + this.name + '!';
        return `Hi. I am ${this.name}.`
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Studdent extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            //description = description + `  `;
            //abbreviation \/
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasHomeLocation()){
        greeting += `I'm visiting ${this.homeLocation}`;
        }
        return greeting;
        
    }
}

const me = new Traveler('Matheus Binotto', 25, 'Philadelphia');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());