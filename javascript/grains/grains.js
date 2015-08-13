function Grains() {}

Grains.prototype = {
  // constructor: Grains,

  square: function (num) { return Math.pow(2, num - 1); },

  total: function (num) { return (2 * (this.square(64)) - 1) ; }
};

module.exports = Grains;

