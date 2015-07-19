var _ = require('underscore');

var complements = {
  C: 'G',
  G: 'C',
  A: 'U',
  T: 'A'
};

function rnaCheck (strand) {
  return _.reduce(strand.split(""), function(rna, letter) {
     return rna + String(complements[letter]);
  }, "");
}

module.exports = rnaCheck;