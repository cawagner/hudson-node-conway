var assert = require("assert")
var conway = require("../conway.js");

describe('A grid', function(){
  describe('when initially created', function(){
    var grid = new conway.Grid();
    it('should have 100 rows', function() {
        assert.equal(100, grid.rows.length);
    });
    it('should have 100 cells per row', function() {
        grid.rows.forEach(function(row) {
            assert.equal(100, row.length);
        });
    });
  })
  describe('after setting three neighbors alive', function() {
    it('should be set to alive', function() {
        var grid = new conway.Grid();
        grid.rows[0][1].isAlive = true;
        grid.rows[1][1].isAlive = true;
        grid.rows[1][0].isAlive = true;
        grid.nextGeneration();

        assert.equal(true, grid.rows[0][0].isAlive);
    });
  });
});