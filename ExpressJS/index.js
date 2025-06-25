const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.setHeader('content-type', 'text/html');
    res.send("Hello Express JS");
})

app.listen(3000, () => {
    console.log("The server is listening on the Port", PORT);
})