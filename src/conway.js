function Cell() {
    this.isAlive = false;
}

function Grid() {
    var i, j;
    this.rows = new Array(100);
    for (i = 0; i < 100; ++i) {
        this.rows[i] = new Array(100);
        for (j = 0; j < 100; ++j) {
            this.rows[i][j] = new Cell();
        }
    }
}

Grid.prototype.nextGeneration = function() {
    this.rows[0][0].isAlive = true;
};

module.exports.Grid = Grid;
module.exports.Cell = Cell;