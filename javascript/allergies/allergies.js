'use strict';
let _ = require('lodash');

class Allergies {
  constructor(index) {
    this.index = index;
    this.possibleAllergies = [ 'eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats' ];
  }

  list() {
    let ret          = [];
    let allergyIndex = this.index;

    this.possibleAllergies.forEach(function (allergy, i) {
      if (allergyIndex & Math.pow(2, i)) {
        ret.push(allergy);
      }
    });
    return ret;
  }

  allergicTo(item) {
    let list = this.list();
    return _.includes(list, item);
  }

}

module.exports = Allergies;
