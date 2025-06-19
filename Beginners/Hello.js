require('./module_export');
var fs = require('fs'); //depicting an inbuilt module
function HelloWorld(name) {
    console.log('My name is ' + name)
}
HelloWorld('Varun');

var filenames = fs.readdirSync('./');
console.log(filenames);

//Demonstration of the module export functionality
//logger.module_export('Don !!!');
