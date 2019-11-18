const express = require('express');
const router = express.Router();

// GET Method
router.get('/', function(req, res, next){
	res.status(201).json({
		data: 'Welcome to Simple authentication product!'
	});
});

module.exports = router;


