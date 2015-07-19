var complements = {
  C: 'G',
  G: 'C',
  A: 'U',
  T: 'A'
};

function rnaCheck (strand) {
  var rna         = "";
  var checkStrand = strand.split("");

  checkStrand.forEach(function(letter) {
    rna += String(complements[letter]);
  });

  return rna;
}

module.exports = rnaCheck;