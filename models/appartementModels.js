class Appartement {
    constructor() {
        this.pieces = [];
    }

    get piecesList() {
        return this.pieces;
    }

    addPiece(piece) {
        this.pieces.push(piece);
    }

    isPieceRegistered(newPiece) {
        for (piece of this.pieces) {
            if (piece.id == newPiece.id)
                return true;
        }

        return false;
    }
}

module.exports = Appartement