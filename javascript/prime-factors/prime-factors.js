var _ = require('lodash');

module.exports = {

  for: function(num, result, divisor) {
    result  = result  || [];
    divisor = divisor || 2;

    if (num % divisor === 0) {
      result.push(divisor);
      return this.for(num / divisor, result, divisor);
    } else if (divisor >  num ) {
      return result;
    } else {
      return this.for(num, result, divisor + 1);
    }
    
  }

};

