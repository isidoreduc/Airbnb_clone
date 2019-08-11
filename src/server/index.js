const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dbConnection');
const MockDB = require('./models/mockDB');
const rentalsRouter = require('./routes/rental');

// express server
const App = express();
const PORT = process.env.PORT || 5000;
App.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// db connection and push data to DB
mongoose
	.connect(config.DB_URI, {
		useNewUrlParser: true
	})
	.then(() => new MockDB().seedDB())
	.catch(err => console.log(err));

// setting the api route for rentals
App.use('/api/v1/rentals', rentalsRouter);
