// express server
const express = require('express');
const App = express();
const PORT = process.env.PORT || 5000;

// db connection
const mongoose = require('mongoose');
const config = require('./config/dbConnection');
mongoose.connect(config.DB_URI, {
	useNewUrlParser: true
});

App.listen(PORT, () => console.log(`Server started on port ${PORT}`));
App.get('/rentals', (req, res) => res.json({ sent: true }));
