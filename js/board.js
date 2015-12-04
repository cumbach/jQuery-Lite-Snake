var Snake = require("./snake.js");
var Coord = require("./coord.js");

(function (){

  var Board = function () {
    this.snake = new Snake();
    this.apples = [new Coord(15,15)];
  };


  module.exports = Board;
})();
