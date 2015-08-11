function Raindrops () {
}

Raindrops.prototype.convert = function (num) {
  var result = ""; 

  if (num % 3 === 0) {
    result = result + 'Pling';
  }

  if (num % 5 === 0) {
    result = result + 'Plang';
  }
  
  if (num % 7 === 0) {
    result = result + 'Plong';
  }

  return result ? result : num.toString();
};

module.exports = Raindrops;