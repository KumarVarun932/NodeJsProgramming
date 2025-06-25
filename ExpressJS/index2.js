const express = require('express');
const app = express();
const env = require('dotenv');
const product_data = require('./Data/products.json');
const axios = require('axios')

const localProduct = require('./Router/localproducts')


env.config({
    PATH: './config/config.env'
})
const PORT = process.env.PORT || 3000;

const { json } = require('express')
app.use(json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/product',localProduct)


app.get('/', (req, res) => {
    res.setHeader('content-type', 'text/html');
    res.send("Hello Express JS");
})

//In this code We will be using the concept of App and Router


app.get('/api/v1/Northwind/Products/:id', async (req, res) => {
    

})
app.listen(3000, () => {
    const Output = 'The server is listening on the Port 3000';
    console.log(Output);
})
