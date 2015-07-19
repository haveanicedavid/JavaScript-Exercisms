function StrandTest (strand) {
  var regex = /[^ATCG]/;
  if (strand) {
    if (regex.test(strand)) {
      throw "errorz";
    }
    this.testStrand = strand;
  } else {
    this.testStrand = "";
  }
}

StrandTest.prototype.count = function(letter) {
  var reggie = new RegExp(letter, "g");
  countString = this.testStrand.match(reggie);
  if (countString){
    return countString.length;
  } else {
    return 0;
  }
  return 0;
};

StrandTest.prototype.histogram = function () {
  var nucleotides = {A: 0, T: 0, C: 0, G: 0};
  var stringSplit = this.testStrand.split("");

  for (var i = 0; i < stringSplit.length; i++) {
    nucleotides[stringSplit[i]]++;
  }
  return nucleotides;
  
};

module.exports = exports = function(input) {
  return new StrandTest(input);
};
