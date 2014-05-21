var assert = require("assert")
var conway = require("../conway.js");

describe('A grid', function(){
  describe('when initially created', function(){
    var grid = new conway.Grid();
    it('should have 100 rows', function() {
        assert.equal(100, grid.rows.length);
    });
  })
});