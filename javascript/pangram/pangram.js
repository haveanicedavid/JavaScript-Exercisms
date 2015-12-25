'use strict';

let _ = require('lodash');

class Pangram {
  constructor(str) {
    this.sanitizedStr = str.toLowerCase().replace(/[^a-z]/g, '');
    this.letters      = 'abcdefghijklmnopqrstuvwxyz';
  }

  isPangram() {
    let strChars = _.uniq(this.sanitizedStr).sort().join('');
    return strChars === this.letters;
  }
}

module.exports = Pangram;
