
function School () {
  var roster = {};
  this.roster = function() {
    return roster;
  };
  this.add = function(name, grade) {
    if (roster[grade]) {
      roster[grade].push(name);
      roster[grade] = roster[grade].sort();
    } else {
      roster[grade] = [name];
    }
    // roster[grade] ? roster[grade].push(name) : roster[grade] = [name];

  };
}

// School.prototype.roster = function (name, grade) {
//   this.roster = {};
//   return this.roster;
// };

// School.prototype.add = function (name, grade) {
//   this.roster.grade = name;
// };


module.exports = School;
