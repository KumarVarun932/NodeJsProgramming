const express = require('express');
const app = express();
const env = require('dotenv');
const product_data = require('./Data/products.json');


env.config({
    PATH :'./config/config.env'
})
const PORT = process.env.PORT || 3000;


app.get('/', (req,res) => {
    res.setHeader('content-type', 'text/html');
    res.send("Hello Express JS");
})

app.get('/api/v2/products', (req, res) => {
    res.status(200).send(JSON.stringify(product_data))
})
app.listen(3000, () => {
    const Output = 'The server is listening on the Port, ${PORT}, in the environment  ${ process.env.NODE_ENV }server';
    console.log(Output);
})
