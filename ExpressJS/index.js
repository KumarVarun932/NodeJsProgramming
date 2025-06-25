const express = require('express');
const app = express();
const env = require('dotenv');
const product_data = require('./Data/products.json');
const axios = require('axios')

env.config({
    PATH :'./config/config.env'
})


const { json } = require('express')
app.use(json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.setHeader('content-type', 'text/html');
    res.send("Hello Express JS");
})
//GET Method Example
app.get('/api/v2/products', (req, res) => {
    res.setHeader('content-type','application/JSON')
    res.status(200).send(JSON.stringify(product_data))
})

//Post Method
app.post('/api/v1/products', (req, res) => {
    const payload = req.body
    console.log(Payload)
    product_data.products.push(payload)
    res.setHeader('content-type', 'application/JSON')
    res.status(200).send(JSON.stringify(product_data))
})

const axios_instance = axios.create({
    baseURL: 'https://services.odata.org/v4/northwind/northwind.svc'
})
//Access Northwind Product service
app.get('/api/v1/Northwind/Products/:id', async (req, res) => {
    //Mode 1
   /* axios.get('https://services.odata.org/v4/northwind/northwind.svc/Products?$format=json')
        .then((results) => {
            console.log(results)
            res.setHeader('content-type', 'application/JSON')
            res.status(200).send(JSON.stringify(results.data.value))
     })*/
    //Mode 2 --This is not working
    /*axios_instance.get('/Products').then((results)=> {
        res.setHeader('content-type', 'application/JSON')
        res.status(200).send(JSON.stringify(results.data.value))
    })*/

     /*MOde 3
    try {
        const results = await axios_instance.get('https://services.odata.org/v4/northwind/northwind.svc/Products?$format=json')
        res.setHeader('content-type', 'application/JSON')
        res.status(200).send(JSON.stringify(results.data.value))
    } catch (error) {
        res.status(404)
    }*/
    /*Mode 4 Setting of the filter of the data--- This is not working
    const ID = req.params.id //declaring the variable to get the parameter
    const field = ID.match(/\S?==()/g)[0]
    const value = ID.split('=').pop()
    console.log(field)
    try {
        const results = await axios_instance.get('https://services.odata.org/v4/northwind/northwind.svc/Products', {
            params: {           //This is to get the filter value
                hello:'world'
            }
        })
        res.setHeader('content-type', 'application/JSON')
        res.status(200).send(JSON.stringify(results.data.value))
    } catch (error) {
        res.status(404)
    }*/

})
app.listen(3000, () => {
    const Output = 'The server is listening on the Port 3000';
    console.log(Output);
})
