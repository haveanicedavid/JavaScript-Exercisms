'use strict';

class School {
  constructor() {
    this.roster = {};
  }
}
// var School = function () {
//
//   var roster = {};
//
//   this.roster = function() {
//     return roster;
//   };
//
//   this.add = function(name, grade) {
//     if (roster[grade]) {
//       roster[grade].push(name);
//       roster[grade].sort();
//     } else {
//       roster[grade] = [name];
//     }
//   };
//
//   this.grade = function(grade) {
//     return roster[grade] ?  roster[grade] : [];
//   };
//
// };
//
// module.exports = School;
