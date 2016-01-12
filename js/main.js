var View = require('./snake_view.js');

$l(function () {
  var rootEl = $l('.snake-game');
  new View(rootEl);
});
