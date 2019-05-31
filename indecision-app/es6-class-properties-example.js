class OldSyntax {
    constructor(){
        this.name = 'Matheus Binotto Web Developer';
        this.getGreetings = this.getGreetings.bind(this);
    }
    getGreetings() {
        return `Hi. My name is ${this.name}`;
    }
}
const oldSyntax = new OldSyntax();
const getGreetings = oldSyntax.getGreetings;
console.log(getGreetings());


// ----------

class NewSyntax {
    name = 'Yzadora';
    getGreetings = () => {
        return `Hi. My name is ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreetings;
console.log(newGetGreeting());