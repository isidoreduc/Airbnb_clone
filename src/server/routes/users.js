const express = require('express');
const User = require('../models/user');
const usersRouter = express.Router();

usersRouter.post('/auth', (req, res) => {});

usersRouter.post('/register', (req, res) => {
	const { username, email, password, passwordConfirmation } = req.body;

	if (!password || !email)
		res.status(422).send({
			errors: [
				{
					status: '422',
					source: '/api/v1/users/',
					details: 'Please provide email and password'
				}
			]
		});
	if (password !== passwordConfirmation)
		res.status(422).send({
			errors: [
				{
					status: '422',
					source: '/api/v1/users',
					details: 'Password must be the same'
				}
			]
		});

	User.findOne({ email }, (err, existingUser) => {
		if (err) return res.status(422).send({});
		if (existingUser)
			return res
				.status(422)
				.send({ details: 'User with this name exists already' });

		const user = new User({ username, email, password });
		user.save(err => {
			if (err) return res.status(422).send({});
			return res.json({ registered: 'true' });
		});
	});
});
