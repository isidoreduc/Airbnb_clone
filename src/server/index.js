const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/dbConnection');
const MockDB = require('./models/mockDB');
const rentalsRouter = require('./routes/rental');

// express server
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// db connection and push data to DB
mongoose
	.connect(config.DB_URI, {
		useNewUrlParser: true
	})
	.then(() => new MockDB().seedDB())
	.catch(err => console.log(err));

// setting the api route for rentals
app.use(cors());
app.use('/api/v1/rentals', rentalsRouter);

// CORS enabled
// app.use(function(req, res, next) {
// 	res.header('Access-Control-Allow-Origin', 'http://localhost:3000/'); // update to match the domain you will make the request from
// 	res.header(
// 		'Access-Control-Allow-Headers',
// 		'Origin, X-Requested-With, Content-Type, Accept'
// 	);
// 	next();
// });
