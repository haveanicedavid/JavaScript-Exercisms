// Constructor
function Test (word) {
  this.word         = word.toLowerCase().split("").sort().join("");
  this.originalWord = word.toLowerCase();
}

Test.prototype.matches = function(input) {
  var matches         = []; // Result to be returned
  var wordToBeChecked = this.word;
  var originalWord    = this.originalWord;
  var checkWords      = []; // words to be checked

  if (arguments.length > 1) {
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
      checkWords.push(arguments[i]);
    }
  } else if (typeof(input) === 'string') {
    checkWords.push(input);
  } else {
    checkWords = input;
  }

  var checkWordsArray = checkWords.forEach(function(word) {
    var testWord = word.toLowerCase().split("").sort().join("");
    // if (wordToBeChecked.indexOf(testWord) > -1 ){}
    if (wordToBeChecked === testWord && word.toLowerCase() !== originalWord){
      matches.push(word);
    }
  });

  return matches;
};

module.exports  =  function anagramCheck(subject){
  return new Test(subject);
};



