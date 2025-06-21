const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end("Home");
    }
    else if (req.url === '/api/user') {
        res.writeHead(200, { 'content-type': 'application/json' });
        const obj = {
            Name: "Varun Kumar",
            Age: "35",
            Email: "varun5nov@gmail.com"
        };
        res.end(JSON.stringify(obj));

    }
    else if (req.url === '/login') {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end("Login Successful");
    }
    else if (req.url === '/signin') {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end("Sign in Successful");
    }
    else {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end("Page not found !!!");
    }
});

server.listen(8000, () => {
    console.log("I am listening at the port 8000");
})