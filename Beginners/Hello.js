//If We will accept the exported module
const logger = require('./module_export.js')

require('./module_export');
var fs = require('fs'); //depicting an inbuilt module
function HelloWorld(name) {
    console.log('My name is ' + name)
}
HelloWorld('Varun');

var filenames = fs.readdirSync('./');
console.log(filenames);

//Demonstration of the module export functionality*/
console.log(logger.sub(15,10));
