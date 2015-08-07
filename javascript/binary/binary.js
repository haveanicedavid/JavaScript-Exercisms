function Binary (binary) {
  this.num = binary.split("").reverse().map(function(n) { 
    return parseInt(n); 
  });
}

Binary.prototype.toDecimal = function () {
  var result   = 0;
  var modifier = 1;

  
  for (var i = 0; i < this.num.length; i++) {
    result = result + (this.num[i] * modifier);
    modifier *= 2;
  }
  return result ? result : 0;
};

module.exports = Binary;