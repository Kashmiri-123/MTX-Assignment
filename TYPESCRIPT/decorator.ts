function canRun(constructorFunction : Function){
    console.log("decorator invoked");
    constructorFunction.prototype.run = true;
}

@canRun
class Person {
     name : string;

    constructor(name : string) {
        console.log("Constructor called", name);
        this.name = name;
    }
}

console.log("Creating 1st object......");

let person1 : Person = new Person("Kashmiri");
console.log("Person1 : " + person1.name);
console.log("person1 can run " + person1['run']);

console.log("creating 2nd object.......");

let person2 : Person = new Person("Mainu");
console.log("Person2 : " + person2.name);
console.log("person2 can run " + person2['run']);

