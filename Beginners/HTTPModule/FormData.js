const http = require("http");

const server = http.createServer((req, res) => {


    /*Based on the type of method We can perform different operation
    a) POST : This is the example We are checking
    b) GET
    c) DELETE
    d) PATCH
    e) PUT
    */
    if(req.method === "POST" && req.url === "/submit") {
        let body = "";
        req.on('data',(chunk)=>{
            body = body + chunk.toString();
        })

        res.on('end',() => {
            console.log(JSON.parse(body));
            res.writeHead(200,{'content-type':'application/json'});
            res.end(JSON.stringify({success: true, message: "Account created successfully!"}))
        })
    }else {
        res.writeHead(404,{'content-type': 'application/json'});
        res.end(JSON.stringify({ success: false, message: "Account creation failed!" }))
    }
});

server.listen(8000,() => {
    console.log("I am listening at the port 8000");
})