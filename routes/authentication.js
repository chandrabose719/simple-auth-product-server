const express = require('express');

const router = express.Router();

const User = require('../models/user');

router.post('/register', async function(req, res, next){
	let userData = req.body;
	let isUsed = await User.findOne({user_email:userData.user_email});
	if(isUsed == null){
		try{
			let user = new User(userData);
			let result = await user.save();
			res.status(201).json(result);
		}catch(err){
			next(err);
		}
	}else{
		res.status(400).json({"error": "Email exists, try different!"});
	}
});

router.post('/login', async function(req, res, next){
	let userData = req.body;
	let isUsed = await User.findOne(userData);
	if(isUsed != null){
		let token = isUsed._id;
		let result = {
			"token": token,
			"message": "User loggedin successfully!"
		} 
		res.status(201).json(result);
	}else{
		res.status(400).json({"error": "There is no account with this credentials!"});
	}
});


module.exports = router;