const express = require('express');
const rentalRouter = express.Router();

rentalRouter.get('', (req, res) => res.json({ ok: true }));

module.exports = rentalRouter;
