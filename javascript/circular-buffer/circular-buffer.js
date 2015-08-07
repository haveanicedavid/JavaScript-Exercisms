module.exports = {
  circularBuffer: function(bufferLength) {
    var contents = [];
    return {
      read: function() {
        if (contents.length === 0) {
          throw bufferEmptyException();
        }
        return contents.shift();
      },
      write: function(item) {
        if (contents.length === bufferLength) {
          throw bufferFullException();
        } else if (item) {
          contents.push(item);
        } 
      },
      forceWrite: function(item) {
        contents.push(item);
        contents.shift();
      },
      clear: function() {
        contents = [];
      },
    };
  },

  bufferEmptyException: function() {},

  bufferFullException: function() {},

};
