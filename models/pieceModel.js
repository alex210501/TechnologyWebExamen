class Piece {
    constructor(id, name, length, width) {
        this.id = id;
        this.name = name;
        this.length = length;
        this.width = width;
    }

    getSurface () {
        return this.length * this.width;
    }
}

module.exports = Piece;