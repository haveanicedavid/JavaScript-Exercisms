// var currentHour;
// var currentMinutes;

exports.at = function(hour, minutes) {
  minutes          = minutes || 0;
  var totalMinutes = (hour * 60) + minutes;

  return {
    plus : function(minutes) {
      tempMinutes = minutes + totalMinutes;
      if (tempMinutes > (24 * 60) ) {
        totalMinutes = tempMinutes % (24 * 60);
      } else {
        totalMinutes = tempMinutes;
      }
      return this;
    },

    minus : function(mins) {
      var newMinutes = totalMinutes - mins;

      if (newMinutes < 0) {
        totalMinutes =  newMinutes +(24 * 60);
      } else {
        totalMinutes = newMinutes;
      }
      return this;
    },

    toString : function () {
      finalHours   = Math.floor(totalMinutes / 60);
      finalMinutes = totalMinutes % 60;

      if (finalHours < 10) {
        finalHours = "0" + finalHours;
      }
      if (finalMinutes < 10) {
        finalMinutes = "0" + finalMinutes;
      }
      return finalHours + ":" + finalMinutes;
    },

    equals : function (otherClock) {
      return otherClock.toString() === this.toString();
    }
  };

};
