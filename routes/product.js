const express = require('express');

const router = express.Router();

const Product = require('../models/product');

router.get('/', async function(req, res, next){
	try{
		let products = await Product.find();
		let result = {
			"count":products.length,
			"results":products
		}
		res.status(201).json(result);
	}catch(err){
		next(err);
	}
});

router.get('/:productId', async function(req, res, next){
	try{
		let result = await Product.findOne({"_id": req.params.productId});
		res.status(201).json(result);
	}catch(err){
		next(err);
	}
});

router.post('/', async function(req, res, next){
	let productData = req.body;
	try{
		let product = new Product(productData);
		let result = await product.save();
		res.status(201).json(result);
	}catch(err){
		next(err);
	}
});

module.exports = router;