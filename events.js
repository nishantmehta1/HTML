/*The eventEmitter.on() method is used to register listeners 
*/
var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('event',()=>{
    console.log("An event occured");
});
eventEmitter.emit('event');