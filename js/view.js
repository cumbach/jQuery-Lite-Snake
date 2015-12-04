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
