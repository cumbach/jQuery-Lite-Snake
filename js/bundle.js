/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*eslint no-undef:0*/
	var Board = __webpack_require__(1);
	var View = __webpack_require__(4);
	
	$l(function () {
	
	  var board = new Board();
	  var $el = $l('.board');
	
	  var view = new View(board, $el);
	
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Snake = __webpack_require__(2);
	var Coord = __webpack_require__(3);
	
	(function (){
	
	  var Board = function () {
	    this.snake = new Snake();
	    this.apples = [new Coord(15,15)];
	  };
	
	
	  module.exports = Board;
	})();


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Coord = __webpack_require__(3);
	
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


/***/ },
/* 3 */
/***/ function(module, exports) {

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


/***/ },
/* 4 */
/***/ function(module, exports) {

	(function() {
	
	
	  var View = function (board, $el) {
	    this.board = board;
	    this.$el = $el;
	    this.populateBoard();
	  };
	
	  View.prototype.populateBoard = function () {
	    var $newDiv;
	    for (var i = 0; i < 30; i++) {
	      for (var j = 0; j < 30; j++) {
	      this.$el.append("<div class=x" + j + "y" + i + "></div>");
	      }
	    }
	    this.render();
	  };
	
	  View.prototype.render = function () {
	    var $tiles = this.$el.children();
	
	    $tiles.removeClass('apple').removeClass('snake');
	
	    this.board.apples.forEach(function (apple) {
	      var coordClass = ".x" + String(apple.x) + "y" + String(apple.y);
	      var $currentDiv = $tiles.find(coordClass);
	      $currentDiv.addClass('apple');
	      // debugger  
	    });
	
	
	  };
	
	  module.exports = View;
	})();


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map