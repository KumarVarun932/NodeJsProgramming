//Pipe is used to move the data from one file to another
const fs = require("fs");

const readStream = fs.createReadStream("Input1.txt", "utf-8");
const writeStream = fs.createWriteStream("Output1.txt", "utf-8");

readStream.pipe(writeStream); //This will pipe the data from one file to another