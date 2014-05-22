function Cell(grid, row, column) {
    this.isAlive = false;
    this.row = row;
    this.column = column;
    this.grid = grid;
}

Cell.prototype.advance = function() {
    if (this.isAlive) {
        if (this.livingNeighborCount() < 2 || this.livingNeighborCount() > 3) {
            this.isAlive = false;
        }
    } else {
        if (this.livingNeighborCount() === 3) {
            this.isAlive = true;
        }
    }
};

Cell.prototype.livingNeighborCount = function() {
    var count = 0;
    var row, column, neighbor;
    for (row = this.row - 1; row <= this.row + 1; ++row) {
        if (row < 0 || row >= this.grid.size) {
            continue;
        }
        for (column = this.column - 1; column <= this.column + 1; ++column) {
            if (column < 0 || column >= this.grid.size) {
                continue;
            }
            if (row === this.row && column === this.column) {
                continue;
            }
            neighbor = this.grid.rows[row][column];
            if (neighbor.isAlive) {
                ++count;
            }
        }
    }
    return count;
};

function Grid(size) {
    var i, j;
    size = size || 100;
    this.size = size;
    this.rows = new Array(size);
    for (i = 0; i < size; ++i) {
        this.rows[i] = new Array(size);
        for (j = 0; j < size; ++j) {
            this.rows[i][j] = new Cell(this, i, j);
        }
    }
}

Grid.prototype.nextGeneration = function() {
    this.rows.forEach(function(row) {
        row.forEach(function(cell) {
            cell.advance();
        });
    });
}

Grid.prototype.population = function() {
    var population = 0;
    this.rows.forEach(function(row) {
        row.forEach(function(cell) {
            if (cell.isAlive) {
                ++population;
            }
        });
    });
    return population;
};

module.exports.Grid = Grid;
module.exports.Cell = Cell;