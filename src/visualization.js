var colors = require("colors");
var conway = require("./conway.js");

function clearScreen() {
    console.log("\033[2J\033[0f");
}

var grid = new conway.Grid(50);
grid.randomize();

setInterval(function() {
    clearScreen();
    grid.rows.forEach(function(row) {
        console.log(row.map(function(cell) {
            return cell.isAlive ? '*'.green : ' ';
        }).join(' '));
    });
    grid.nextGeneration();
}, 100);