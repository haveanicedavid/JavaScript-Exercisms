var _ = require('underscore');

var numerals = [
  {num: 1000, letter: 'm'},
  {num: 900 , letter: 'cm'},
  {num: 500 , letter: 'd'},
  {num: 400 , letter: 'cd'},
  {num: 100 , letter: 'c'},
  {num: 90  , letter: 'xc'},
  {num: 50  , letter: 'l'},
  {num: 40  , letter: 'xl'},
  {num: 10  , letter: 'x'},
  {num: 9   , letter: 'ix'},
  {num: 5   , letter: 'v'},
  {num: 4   , letter: 'iv'},
  {num: 1   , letter: 'i'},
];


function toRoman (number) {
  var result = '';
  for (var i = 0; i < NUMERALS.length; i++) {
    
    var checkNum = NUMERALS[i].num;
    var letter = NUMERALS[i].letter;

    while (number >= checkNum) {
      result = result + letter;
      number = number - checkNum;
    }
  }
  return result;
}


module.exports = toRoman;
