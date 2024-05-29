const express = require('express');
const cors = require('cors')
const product = require('./data/product.json')
const app = express();
const port = process.env.PORT || 8000

// middleware 
app.use(cors())

app.get('/', (req, res) =>{
    res.send("this server is running")
})

app.get('/product' , (req, res) =>{
    res.send(product)
})

app.get('/product/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const findProduct = product.find( pro => parseInt(pro.id) == id) 
    res.send(findProduct)
    // console.log(findProduct)
})

app.listen(port)