function beerCheck () {
  return {
    verse: function(num) {
      if (num > 2) {
        return manyBottles(num);
      } else if (num === 2) {
        return twoBottles();
      } else if (num === 1) {
        return oneBottle();
      } else {
        return noBottles();
      }
    },

    sing: function(start, end) {
      var result          = [];
      var verseToSing     = start;
      var verseToEndOn      = (typeof end == 'undefined') ? 0 : end;
      while (verseToSing >= verseToEndOn) {
        result.push( this.verse(verseToSing));
        verseToSing-- ;
      }
      return result.join("\n");
    }

  };
}

function manyBottles (num) {
  var currentBeer = num;
  var nextBeer    = num - 1;
  return currentBeer + " bottles of beer on the wall, " + currentBeer + " bottles of beer.\nTake one down and pass it around, " + nextBeer + " bottles of beer on the wall.\n";
}

function twoBottles () {
  return "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n";
}

function oneBottle () {
  return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
}

function noBottles () {
  return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
}

module.exports = beerCheck();
