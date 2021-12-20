var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function canRun(constructorFunction) {
    console.log("decorator invoked");
    constructorFunction.prototype.run = true;
}
var Person = /** @class */ (function () {
    function Person(name) {
        console.log("Constructor called", name);
        this.name = name;
    }
    Person = __decorate([
        canRun
    ], Person);
    return Person;
}());
console.log("Creating 1st object......");
var person1 = new Person("Kashmiri");
console.log("Person1 : " + person1.name);
console.log("person1 can run " + person1['run']);
console.log("creating 2nd object.......");
var person2 = new Person("Mainu");
console.log("Person2 : " + person2.name);
console.log("person2 can run " + person2['run']);
