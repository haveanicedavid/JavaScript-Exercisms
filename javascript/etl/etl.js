var _ = require("underscore");


function transform (oldValues) {
  var newValues = {};

  _.each( oldValues, function( lettersArray, number ) {
    _.each( lettersArray, function( letter ) {
      newValues[ letter.toLowerCase() ] = parseInt( number );
    });
  });

  return newValues;
}

module.exports = transform;