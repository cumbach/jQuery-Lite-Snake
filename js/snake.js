var Coord = require("./coord.js");

(function (){

  var DIRECTIONS = ["N", "E", "S", "W"];

  var Snake = function () {
    this.direction = "S";
    this.segments = [new Coord(0,0)];
  };

  Snake.prototype.move = function () {
    var head = this.segments[0].addHead(this.direction);
    this.segments.unshift(head);
    this.segments.pop();
  };

  Snake.prototype.turn = function (direction) {
    this.direction = direction;
  };

  module.exports = Snake;

})();
