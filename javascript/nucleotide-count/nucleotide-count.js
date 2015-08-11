function StrandTest (strand) {

  if (strand && /[^ATCG]/.test(strand)) { throw "errorz"; }

  var testStrand = strand || "";

  this.count = function(letter) {
    var reggie  = new RegExp(letter, "g");
    countString = testStrand.match(reggie);

    return countString ? countString.length : 0;
  };

  this.histogram = function() {
    var nucleotides = {A: 0, T: 0, C: 0, G: 0};
    var stringSplit = testStrand.split("");

    for (var i = 0; i < stringSplit.length; i++) {
      nucleotides[stringSplit[i]]++;
    }
    return nucleotides;
  };

  return this;
}

module.exports = StrandTest;
