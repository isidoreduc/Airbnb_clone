const express = require('express');
const Rental = require('../models/rental');

const rentalRouter = express.Router();
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
