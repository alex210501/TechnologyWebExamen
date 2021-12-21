// Import express
let express = require('express');

// Create the router object
let router = express.Router();

// Import appartement controller
let appartementController = require('./controllers/appartementController');

// Import appartement controller
let pieceController = require('./controllers/pieceController');

// Redirection for all the routes (get and post)
router.get('/', (req, res) => res.redirect('/appartement'));
router.get('/appartement', (req, res) => appartementController.appartementList(req, res));
router.get('/piece/editPiece/', (req, res) => pieceController.editPiece(req, res));
router.post('/appartement/registerPiece/', (req, res) => appartementController.registerPiece(req, res));

// Export the router module
module.exports = router;