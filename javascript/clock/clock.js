'use strict';

module.exports.at = function(hour, minutes) {
  minutes          = minutes || 0;
  let totalMinutes = (hour * 60) + minutes;

  return {
    plus(minutes) {
      let tempMinutes = minutes + totalMinutes;
      if (tempMinutes > (24 * 60) ) {
        totalMinutes = tempMinutes % (24 * 60);
      } else {
        totalMinutes = tempMinutes;
      }
      return this;
    },

    minus(mins) {
      let newMinutes = totalMinutes - mins;

      if (newMinutes < 0) {
        totalMinutes =  newMinutes +(24 * 60);
      } else {
        totalMinutes = newMinutes;
      }
      return this;
    },

    toString() {
      let finalHours   = Math.floor(totalMinutes / 60);
      let finalMinutes = totalMinutes % 60;

      if (finalHours < 10) {
        finalHours = "0" + finalHours;
      }
      if (finalMinutes < 10) {
        finalMinutes = "0" + finalMinutes;
      }
      return finalHours + ":" + finalMinutes;
    },

    equals(otherClock) {
      return otherClock.toString() === this.toString();
    }
  };

};
