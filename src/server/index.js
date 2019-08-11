const express = require('express');
const App = express();
const PORT = process.env.PORT || 5000;

App.listen(PORT, () => console.log(`Server started on port ${PORT}`));
App.get('/rentals', (req, res) => res.json({ sent: true }));
