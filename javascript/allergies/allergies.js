'use strict';
var _ = require('lodash');

var allergies = {
  128: 'cats',
   64: 'pollen',
   32: 'chocolate',
   16: 'tomatoes',
    8: 'strawberries',
    4: 'shellfish',
    2: 'peanuts',
    1: 'eggs'
};

class Allergies {
  constructor(number) {
    this.number = number;
  }

  list() {
    let ret = [];
    if (!this.number) { return ret; } // handle no allergies
    if (allergies[this.number]) {
      ret.push(allergies[this.number]);
      return ret;
    }

    for (var n in allergies) {

    }
  }
}


module.exports = Allergies;

//   var allergies = {
//     128: 'cats',
//      64: 'pollen',
//      32: 'chocolate',
//      16: 'tomatoes',
//       8: 'strawberries',
//       4: 'shellfish',
//       2: 'peanuts',
//       1: 'eggs'
//   };
//
//   return {
//     list: function() {
//       var ret = [];
//       ret.push(allergies[n]);
//
//       return n ? ret : [];
//     }
//   };
//
//
// };
  // return {
  //   list: function () {
  //     var ret   = [];
  //     var adder = function (number) {
  //       for (var num in allergies) {
  //         if (number % num === 0 && number >= num) {
  //           ret.push(allergies[num]);
  //           adder(number - num);
  //         } else if (number === 1) {
  //           ret.push(allergies[1]);
  //         }
  //       }
  //     };

  //     adder(n);
  //     return n ? _.uniq(ret) : [];
  //   }
  // };
