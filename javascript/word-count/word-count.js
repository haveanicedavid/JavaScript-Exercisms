var WordCount = function(input) {
  var split = input.split(/\s+/),
      obj = {};
  for (var word in split) {
    if (obj[split[word]] === undefined && typeof(word) !== 'function') {
      obj[split[word]] = 1;
    } else {
      obj[split[word]]++;
    }
  }

  // for (var x = 0; x < split.length; x++) {
  //   if (obj[split[x]] === undefined ) {
  //     obj[split[x]] = 1;
  //   } else {
  //     obj[split[x]]++;
  //   }
  // }

  return obj;
};

module.exports = WordCount;
