const logger = require('./module_export');

function HelloWorld(name) {
    console.log('My name is ' + name)
}
HelloWorld('Varun');

//Demonstration of the module export functionality
logger.module_export('Don !!!');
