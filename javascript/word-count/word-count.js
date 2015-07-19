var WordCount = function(input) {
  var results = {};

  input.split(/\s+/).forEach(function(word) {
    if (results[word] && results.hasOwnProperty(word)) {
      results[word]++;
    } else {
      results[word] = 1;
    }
  });
  return results;
};

module.exports = WordCount;