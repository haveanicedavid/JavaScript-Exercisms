var _ = require('underscore');

var range = _.range(1, 65);

var GRAINS_BOARD = _.reduce(range, function(object, value) {
  var lastValue = object[value-1];
  value === 1 ? object[value] = 1 : object[value] = lastValue * 2;

  return object;
}, {});


function grains () {
  this.square = function(number) {
    return GRAINS_BOARD[number];
  };
}

grains.prototype.total = function () {
  return _.reduce(GRAINS_BOARD, function(sum, value) {
    return sum + value;
  }, 0);
};

module.exports = grains;