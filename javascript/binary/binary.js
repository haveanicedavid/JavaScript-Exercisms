'use strict';

class Binary {
  constructor(numString) {
    this.num = numString.split("")
                        .reverse()
                        .map(n => parseInt(n));
  }

  toDecimal() {
    let binary = this.num.reduce( (prev, curr, idx) => 
      prev + (curr * Math.pow(2, idx))
    );

    return binary || 0;
  }
}

module.exports = Binary;
