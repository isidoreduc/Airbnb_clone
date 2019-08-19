const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dbConnection');
const MockDB = require('./models/mockDB');
const rentalsRouter = require('./routes/rental');
const usersRouter = require('./routes/users');

// express server
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// db connection and push data to DB
mongoose
	.connect(config.DB_URI, {
		useNewUrlParser: true
	})
	.then(() => new MockDB().seedDB())
	.catch(err => console.log(err));

// setting the api routes
app.use(cors());
app.use('/api/v1/rentals', rentalsRouter);
app.use('/api/v1/users', usersRouter);
