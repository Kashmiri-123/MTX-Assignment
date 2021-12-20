var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log("Listener 1 is executed");
}

var listener2 = function listener2(){
    console.log("Listener 2 is executed");
}

eventEmitter.addListener('myevent', listener1);
eventEmitter.addListener('myevent', listener2);

eventEmitter.emit('myevent');  
console.log(eventEmitter.listenerCount('myevent'))
console.log("Event names " , eventEmitter.eventNames('myevent'))

console.log("removing listener.......")
eventEmitter.removeListener('myevent', listener1);
console.log(eventEmitter.listenerCount('myevent'))
console.log(eventEmitter.listeners('myevent'))
