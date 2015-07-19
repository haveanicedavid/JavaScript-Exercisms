var GIGASECOND = Math.pow(10, 12);

function dateCheck (date) {
  this.startDate = date.getTime();
}

dateCheck.prototype.date = function () {
  var newDate = new Date(this.startDate + GIGASECOND);
  newDate.setSeconds(0);
  newDate.setMinutes(0);
  newDate.setHours(0);
  return newDate;
};

module.exports = dateCheck;