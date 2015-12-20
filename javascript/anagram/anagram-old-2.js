function Anagram (originalWord) {
  this.originalWordSorted = sortWord(originalWord);

  this.matches = function(input) {
    if (typeof input === 'object') {
      input = input.filter(function(word) {
        return word.toLowerCase() !== originalWord.toLowerCase();
      });
    } else {
      input = Array.prototype.slice.call(arguments);
    }

    return input.filter(function(word) {
      return originalWordSorted === sortWord(word);
    });

  };

  return this;
}

function sortWord (word) {
  return word.toLowerCase().split("").sort().join("");
}


module.exports = Anagram;
