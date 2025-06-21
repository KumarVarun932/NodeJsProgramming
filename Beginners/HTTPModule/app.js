
//This section of code reads the content of the file index.html and diplay it on the web.
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    const filepath = __dirname+"/index.html";
    console.log(filepath);
    const filecontent = fs.readFileSync(filepath);
    res.end(filecontent);
})
server.listen(3000, () => {
    console.log("The server is listening on the port 3000");
});
//C:\Users\MITALI & VARUN\source\repos\KumarVarun932\NodeJsProgramming\Beginners\HTTPModule\index.html