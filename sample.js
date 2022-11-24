var events = require('events');
var eventEmitter = new events.EventEmitter();
//Create an event handler
var myEventHandler = function(){
    console.log('I hear a scream!');

}
var myEventHandler1= function(){
    console.log('I hear nothing');
}
//Assign the event handler to an event
eventEmitter.on('scream',myEventHandler);
eventEmitter.on('scream1',myEventHandler1);
//Fire the scream event
eventEmitter.emit('scream');
eventEmitter.emit('scream1');