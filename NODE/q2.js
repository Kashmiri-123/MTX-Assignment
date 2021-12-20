var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log("Listener 1 is executed");
}

var listener2 = function listener2(){
    console.log("Listener 2 is executed");
}

eventEmitter.addListener('myevent1', listener1);
eventEmitter.addListener('myevent2', listener2);

eventEmitter.emit('myevent', 'myevent');  
console.log("Event names " , eventEmitter.eventNames('myevent'))

