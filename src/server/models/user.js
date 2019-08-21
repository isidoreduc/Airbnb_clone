const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		min: [4, 'Too short, min is 4 characters'],
		max: [128, 'Too long, max is 32 characters']
	},
	email: {
		type: String,
		min: [4, 'Too short, min is 4 characters'],
		max: [128, 'Too long, max is 32 characters'],
		unique: true,
		lowercase: true,
		required: 'Email is required',
		match:
			'/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/'
	},
	password: {
		type: String,
		min: [4, 'Too short, min is 4 characters'],
		max: [128, 'Too long, max is 32 characters'],
		required: ' password is required'
	},
	rentals: [{ type: Schema.Types.ObjectId, ref: 'Rental' }]
});

userSchema.pre('save', next => {
	const userino = this;
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(userino.password, salt, (err, hash) => {
			// Store hash in your password DB.
			userino.password = hash;
			// call for the next action in queue => save user
			next();
		});
	});
});

module.exports = mongoose.model('User', userSchema);
