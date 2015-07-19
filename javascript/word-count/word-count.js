var WordCount = function(input) {
  // var split = input.split(/\s+/);
  var results = {};

  input.split(/\s+/).forEach(function(word) {
    if (results[word] && isNotFunction(results[word])) {
      results[word]++;
    } else {
      results[word] = 1;
    }
  });
  return results;
};

function isNotFunction (word) {
  return Object.prototype.toString.call(word) !== '[object Function]';
}

module.exports = WordCount;