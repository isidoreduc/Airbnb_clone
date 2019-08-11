// express server
const express = require('express');
const App = express();
const PORT = process.env.PORT || 5000;

App.listen(PORT, () => console.log(`Server started on port ${PORT}`));
App.get('/rentals', (req, res) => res.json({ sent: true }));

// db connection and push data to DB
const mongoose = require('mongoose');
const config = require('./config/dbConnection');
const MockDB = require('./models/mockDB');

mongoose
	.connect(config.DB_URI, {
		useNewUrlParser: true
	})
	.then(() => new MockDB().seedDB())
	.catch(err => console.log(err));
