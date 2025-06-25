const express = require('express')
const router = express.Router()
const data = require(',/Data/products.json')

router.route('/').get((req, res) => {
    res.setHeader('content-type', 'application/JSON')
    res.send(data)
})

router.route('./').post((req, res) => {
    let payload = req.body
    data.pr
})
module.exports = router