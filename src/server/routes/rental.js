const express = require('express');
const Rental = require('../models/rental');

const rentalRouter = express.Router();
// rentalRouter.use(function(req, res, next) {
// 	res.header('Access-Control-Allow-Origin', 'http://localhost:3000/'); // update to match the domain you will make the request from
// 	res.header(
// 		'Access-Control-Allow-Headers',
// 		'Origin, X-Requested-With, Content-Type, Accept'
// 	);
// 	next();
// });

rentalRouter.get('', (req, res) =>
	Rental.find({}, (err, rentals) => res.json(rentals))
);

rentalRouter.get('/:id', (req, res) =>
	Rental.findById(req.params.id, (err, rentals) =>
		rentals
			? res.json(rentals)
			: res.status(422).send({
					errors: [
						{
							status: '422',
							source: '/api/v1/rentals/:id',
							details: 'No result with this id - Error422: Unprocessable entity'
						}
					]
			  })
	)
);

module.exports = rentalRouter;
