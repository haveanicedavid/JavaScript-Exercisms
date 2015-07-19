var Phone = function(num) {
  this.num = num;
};

Phone.prototype.number = function () {
  // var oldNumber = this.num;
  var sanitizedNumber = this.num.replace(/[\D]/g, "");
  var length = sanitizedNumber.length;

  if (length !== 10) {
    if (length === 11 && sanitizedNumber[0] === '1') {
      return sanitizedNumber.slice(1, 11).replace(/[\D]/g, "");
    }
    return "0000000000";
  }

  return sanitizedNumber;
};

Phone.prototype.areaCode = function () {
  return this.num.slice(0, 3);
};

Phone.prototype.toString = function () {
  number = this.num;
  var areaCode   = "(" + number.slice(0, 3) + ") ";
  var firstThree = number.slice(3, 6) + "-";
  var lastFour   = number.slice(6, 10);
  return areaCode + firstThree + lastFour;
};

module.exports = Phone;
