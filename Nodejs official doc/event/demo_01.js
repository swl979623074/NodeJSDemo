'use strict'
const log = console.log;
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// is possible to use ES6 Arrow Functions as listeners, however, when doing so, the this keyword will no longer reference the EventEmitter instance:
myEmitter.on('event', () => {
  console.log('an event occurred!',this);
});

myEmitter.on('events', function(a, b) {
	log(a, b, this);
});

myEmitter.once('swl', function() {
	log("swl");
});
myEmitter.once('swl', function() {
	log("swlll");
});

myEmitter.emit('event');

log(myEmitter.eventNames(),myEmitter.getMaxListeners())

myEmitter.emit('events',1,2);

// myEmitter.emit('error', new Error('whoops!'));

myEmitter.emit("swl");