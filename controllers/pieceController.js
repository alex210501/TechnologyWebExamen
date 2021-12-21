const Piece = require('../models/pieceModel.js');

let database = require('../database');

module.exports.editPiece = function(req, res) {
    let id = req.query.id;
    let name = '';
    let length = 0;
    let width = 0;
    
    if (id == undefined) {
        id = -1;
    }

    database.query("SELECT * FROM rooms WHERE id=?", id, (error, result) => {
        if (error) console.log(error);
        else {
            console.log(result);
            if (result.length > 0) {
                name = result[0].name;
                length = result[0].length;
                width = result[0].width;
            }

            res.render('editPieceView.ejs', {pieceId: id, pieceName: name, pieceLength: length, pieceWidth: width});
        }
    });


    // res.render('editPieceView.ejs', {pieceId: id, pieceName: name, pieceWidth: width, pieceLength: length});
}