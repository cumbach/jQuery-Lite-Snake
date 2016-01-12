var Board = require('./snake.js');

var View = function($el) {
  this.$el = $el;
  this.board = new Board();
  this.setupViewGrid();
  // debugger;
  $l(window).on("keydown", this.handleKeyEvent.bind(this));
  this.intervalID = window.setInterval(this.step.bind(this), 100);
};

var KEYCODES = {
  37: "W",
  38: "N",
  39: "E",
  40: "S"
};

View.prototype.handleKeyEvent = function (event) {
  this.board.snake.turn(KEYCODES[event.keyCode]);
};

View.prototype.setupViewGrid = function () {
  for (var i = 0; i <= 20; i++) {
    // debugger;
    var $ul = $l("ul");

    for (var j = 0; j <= 20; j++) {
      var $li = $l('li');
      $li.attr('pos', [i,j]);
      $ul.append($li);
    }
    debugger;
    this.$el.append($ul);
  }

  this.renderApple();
  // this.renderMines();
  this.$li = this.$el.find('li');
  this.$h1 = $l('h1');
  this.$el.append(this.$h1);
  this.$h1.addClass("count");
  // this.$h1.text("SCORE: 0");
};

View.prototype.renderApple = function () {
  var position = this.board.apple.position;

  this.$apple = $l("li[pos='" + position.x + "," + position.y + "']");
  this.$apple.addClass('apple');
};

// View.prototype.renderMines = function () {
//   var positions = this.board.mines.map(function(mine){
//     return mine.position;
//   });
//   positions.forEach(function(position){
//     this.$mines = $("li[pos='" + position.x + "," + position.y + "']");
//     this.$mines.addClass('mine');
//   });
// };

View.prototype.viewRender = function () {
  this.$li.removeClass();
  var view = this;
  var segments = this.board.snake.segments;

  segments.forEach(function(segment){
    for (var i = 0; i <= 20; i++) {
      for (var j = 0; j <= 20; j++) {
        if (segment.x === i && segment.y === j) {
          this.$snake = $l("li[pos='" + i + "," + j + "']");
          this.$snake.addClass("snake2");
        }
        if (view.board.snake.head().x === i && view.board.snake.head().y === j) {
          this.$head = $l("li[pos='" + i + "," + j + "']");
          this.$head.removeClass('snake2');
          this.$head.addClass("head");
        }
      }
    }
  });

  var segments2 = this.board.snake2.segments;

  segments2.forEach(function(segment){
    for (var i = 0; i <= 20; i++) {
      for (var j = 0; j <= 20; j++) {
        if (segment.x === i && segment.y === j) {
          this.$snake2 = $l("li[pos='" + i + "," + j + "']");
          this.$snake2.addClass("snake");
        }
        if (view.board.snake2.head().x === i && view.board.snake2.head().y === j) {
          this.$head = $l("li[pos='" + i + "," + j + "']");
          this.$head.removeClass('snake');
          this.$head.addClass("head");
        }
      }
    }
  });

  // this.$h1.text('SCORE: ' + this.board.count)
  this.renderApple();
  // this.renderMines();

};


View.prototype.step = function () {
    this.board.snake.move();
    this.board.snake2.move();
  if (this.board.snake.segments.length !== 0) {
    this.viewRender();
  } else {
    this.$el.empty();
    this.$over = $l('<over>');
    this.$over.html("Game Over\nFinal Score: " + this.board.count);
    this.$el.append(this.$over);
    this.$el.removeClass();

    window.clearInterval(this.intervalID);
  }
};








module.exports = View;
