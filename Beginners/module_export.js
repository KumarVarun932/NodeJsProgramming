var url = 'https://www.varun.io.com/'

function module_export() {
    console.log("My name is Varun !!!")
}



function sub(a, b) {
    const res = a > b ? a - b : b - a;
    console.log("The subtraction of two number is ", res);
}
module.exports = {
    module_export,sub
}
//If We export the module then also We can use
//module.exports.module_export = module_export;