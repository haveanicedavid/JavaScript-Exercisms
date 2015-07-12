(function () {
'use strict';

exports.compute = function(arg1, arg2) {

  if(arg1.length !== arg2.length) {
    throw 'DNA strands must be of equal length.';
  } else {
    var count = 0;
    for (var i = 0; i < arg1.length; i++) {
      if (arg1[i] !== arg2[i]){
        count++;
      }
    }
    return count;
  }
};

})(); 

