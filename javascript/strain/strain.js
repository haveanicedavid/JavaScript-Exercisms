'use strict';

module.exports = {
  keep: function (input, callback) {
    let ret = [];
    for (var i = 0; i < input.length; i++) {
      if (callback.call(null, input[i])) {
        ret.push(input[i]);
      }
    }
    return ret;
  },

  discard: function (input, callback) {
    let ret = [];
    for (var i = 0; i < input.length; i++) {
      if (!callback.call(null, input[i])) {
        ret.push(input[i]);
      }
    }
    return ret;
  }
};
