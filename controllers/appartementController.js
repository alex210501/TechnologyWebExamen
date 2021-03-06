// Import Appartement and Piece
const Appartement = require('../models/appartementModels.js');
const Piece = require('../models/pieceModel.js');

// Import database
let database = require('../database');

// Create a global appartement instance
let appartement = new Appartement();

module.exports.appartementList = function(req, res) {
    // Select all the room from the database
    database.query("SELECT * FROM rooms;", (error, result) => {
        if (error) console.log(error);
        else {
            appartement = new Appartement();
            for (room of result) {
                appartement.addPiece(new Piece(room.id, room.name, room.length, room.width));
            }
            res.render('appartementView.ejs', {pieces: appartement.piecesList});
        }
    });
}

module.exports.registerPiece = function (req, res) {
    // Get all the body informations
    let id = req.body.id;
    let name = req.body.name;
    let length = req.body.length;
    let width = req.body.width;

    // if the rooms already exists, we update it
    // Otherwise, we create it on the database
    if (id == -1) {
        database.query("INSERT INTO rooms (name, length, width) VALUES (?, ?, ?)", [name, length, width],
                        (error, result) => {
                            if (error) console.log(error);
                            else res.redirect('/appartement');
                        });
    }
    else {
        database.query("UPDATE rooms SET name=?, length=?, width=? WHERE id=?", [name, length, width, id],
            (error, result) => {
                if (error) console.log(error);
                else res.redirect('/appartement');
            });
    }
}