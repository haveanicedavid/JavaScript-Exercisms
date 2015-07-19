var _ = require('underscore');

var Robot = function() {
  this.name     = generateName();
  this.oldNames = [];
};

Robot.prototype.reset = function () {
  var newName = generateName();

  if ( !_.contains(this.oldNames, newName) ) {
    newName = generateName();
  }
  
  this.oldNames.push(newName);
  this.name = newName;
};

function generateName () {
  var possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var possibleNumbers = "0123456789".split("");

  var robotLetters    = _.sample(possibleLetters, 2).join("");
  var robotNumbers    = _.sample(possibleNumbers, 3).join("");

  return robotLetters + robotNumbers; 
}

module.exports = Robot;