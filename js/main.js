/*eslint no-undef:0*/
var Board = require("./board.js");
var View = require("./view.js");

$l(function () {

  var board = new Board();
  var $el = $l('.board');

  var view = new View(board, $el);

});
