const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	user_name: {
		type: String,
		required: true,
	},
	user_email: {
		type: String,
		required: true,
	},
	user_password: {
		type: String,
		required: true,
	},
	status:{
		type:String,
		default: 'active'
	},	
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', userSchema);

