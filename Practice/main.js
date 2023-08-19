const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const obj = {type : 'text', data: 'hello World', date : '2023-08-19'};

myEmitter.on('test', (arg1) =>{
  console.log(arg1);
});

myEmitter.emit('test', obj);