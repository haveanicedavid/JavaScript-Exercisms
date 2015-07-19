function spaceAge (seconds) {
  this.seconds = seconds;
}

spaceAge.prototype.onEarth = function () {
  var timeString = ( this.seconds / 31557600 ).toFixed(2); // Is there a way to make toFixd return an integer?
  return Number(timeString);
};

spaceAge.prototype.onMercury = function () {
  var timeString = ( this.onEarth() / 0.2408467 ).toFixed(2);
  return Number(timeString);
};

spaceAge.prototype.onVenus = function () {
  var timeString = ( this.onEarth() / 0.61519726 ).toFixed(2);
  return Number(timeString);
};

spaceAge.prototype.onMars = function () {
  var timeString = ( this.onEarth() / 1.8808158 ).toFixed(2);
  return Number(timeString);
};

spaceAge.prototype.onJupiter = function () {
  var timeString = ( this.onEarth() / 11.862615 ).toFixed(2);
  return Number(timeString);
};

spaceAge.prototype.onSaturn = function () {
  var timeString = ( this.onEarth() / 29.447498 ).toFixed(2);
  return Number(timeString);
};

spaceAge.prototype.onUranus = function () {
  var timeString = ( this.onEarth() / 84.016846 ).toFixed(2);
  return Number(timeString);
};

spaceAge.prototype.onNeptune = function () {
  var timeString = ( this.onEarth() / 164.79132 ).toFixed(2);
  return Number(timeString);
};


module.exports = spaceAge;