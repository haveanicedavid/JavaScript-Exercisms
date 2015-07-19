function triangle (side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;

}

triangle.prototype.kind = function () {
  var side1 = this.side1;
  var side2 = this.side2;
  var side3 = this.side3;

  if (illegalTriangle(side1, side2, side3)) {
    throw "error";
  } else if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
  
};

illegalTriangle = function(side1, side2, side3) {
  if (side1 > side2 + side3 || side2 > side1 + side3 || side3 > side1 + side2) {
    return true;
  } else if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = triangle;