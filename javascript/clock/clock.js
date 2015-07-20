var newHour;
var newMinutes;

exports.at = function(hour, minutes) {
  newHour = hourParse(hour);
  minutes ? newMinutes = minuteParse(minutes) : newMinutes = "00";

  return {
    plus : function(minutes) {
      var tempMinutes = parseInt(newMinutes) + minutes; 
      newMinutes      = minuteParse(tempMinutes);
      return this;
    },
    toString : function () {
      return newHour + ":" + newMinutes;
    },
  };
};

function hourParse (hour) {
  if (hour > 23) {
    return hourParse(hour % 24);
  } else if (hour < 10) {
    return "0" + hour;
  } else {
    return String(hour);
  }
}


function minuteParse (minutes) {
  if (minutes > 60) {
    newHour = hourParse(parseInt(newHour) + 1);
    return minuteParse(minutes % 60);
  } else if (minutes < 10) {
    return "0" + minutes;
  } else if ( minutes > 60 ) {
  } else {
    return String(minutes);
  }
}
