const express = require('express');
const router = express.Router();



const indexController = require('../controlllers/index'); 

router.get('/', indexController.index);

router.get('/products', indexController.listOfProducts);

router.post('/new_products', indexController.newProduct);

module.exports = router;