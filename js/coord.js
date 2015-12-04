var TRANSFORMATIONS = {
    "N":[0,-1],
    "E":[1,0],
    "S":[0,1],
    "W":[-1,0]
  };

(function() {
  var Coord = function (x, y) {
    this.x = x;
    this.y = y;
  };

  Coord.prototype.addHead = function (direction) {
    var trans = TRANSFORMATIONS[direction];
    return new Coord(this.x + trans[0], this.y + trans[1]);
  };

  Coord.prototype.equals = function (other) {
    return (this.x === other.x && this.y === other.y);
  };

  Coord.prototype.isOpposite = function (other) {

  };

  module.exports = Coord;
}());
