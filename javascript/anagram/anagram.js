'use strict';

function sortWord(word) {
  return word.toLowerCase().split('').sort().join('');
}

function isAnagram(word1, word2) {
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();
  return sortWord(word1) === sortWord(word2) && word1 !== word2;
}

module.exports = function(testWord) {
  return {
    matches(input) {
      if (typeof input !== 'object') {
        input = Array.prototype.slice.call(arguments);
      }

      return input.filter( x => isAnagram(testWord, x) );
    }
  };
};
