const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('codeit', ()=>{
  console.log('I love Programming!');
});
myEmitter.emit('codeit');