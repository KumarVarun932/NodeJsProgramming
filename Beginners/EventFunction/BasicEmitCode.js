const EventEmitter = require('events'); //Using the Global Module Event
class MyEmitter extends EventEmitter { } //Extending the EventEmitter Class

const myEmit = new MyEmitter(); //Instantiation of the object
const config = require("./config").event; //When We want multiple even value to be used and We do not need to change everywhere

console.log(config);

myEmit.on(config.Add, function () {
    console.log("Event is listened");
})

myEmit.emit('Add');

// We can also pass a parameter via Event Emit function

myEmit.on(config.Greet, function(a, b) {
    console.log("Paramter is passed with value");
});

myEmit.emit('Greet', 'a', 'b');

