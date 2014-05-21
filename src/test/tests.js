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
});