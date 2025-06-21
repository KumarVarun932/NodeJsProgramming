const http = require("http");

//Creating a new server with status code 200( It means its working fine)
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end("Hello I am coming from Server");
});

//If Serve ris listening then We will get the message in the Terminal
server.listen(8000, () => {
    console.log("Server is listening at port 8000");
});

