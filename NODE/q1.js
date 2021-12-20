var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log('listener1 executed');
}

var listener2 = function listener2(){
    console.log('listener2 executed');
}

eventEmitter.on('event', listener1);
eventEmitter.on('event', listener2);
eventEmitter.emit('event');