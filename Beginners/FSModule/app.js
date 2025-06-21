
const fs = require("fs");

console.log("Before reading the file-1");
fs.readFile("Input.txt",'utf-8',(err, data) => {
    if (err) throw err;
    console.log(data);
});
console.log("After reading the file-1");


console.log("Before reading the file-2");
const data = fs.readFileSync("Input.txt", "utf-8");
console.log(data);
console.log("After reading the file-2");

fs.writeFile("Input.txt", "Jai Hanuman", (err) => {
    if (err) throw err;
});

fs.appendFile("Input.txt", "Hello , My name is Varun Kumar", (err) => {
    if (err) throw err;
});

//recommended way to read a large file
const filedata = fs.createReadStream("Input.txt", "utf-8"); //Inputed a good amount of text in the file to read
//This will not give the data but the metadata of the file and its data
console.log(filedata); 

//TO read the content of the file , We need to use the event in the received metadata
filedata.on('data',(chunk)=> {
    console.log(chunk);
})

//When we complete the file reading We can signal it via statement
filedata.on('end', () => {
    console.log(" -----------------------------------------------------------------\n The file reading is complete");
})
