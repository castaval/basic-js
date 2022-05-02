const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  } else if (!(Object.prototype.toString.call(date) === "[object Date]")) {
    return Error("Invalid date!");
  }

  let dateParse = new Date(Date.parse(date));

  let year = dateParse.getFullYear();

  let month;

  if (year < 1970) {
    dateParse.setFullYear(1973);
    month = dateParse.getUTCMonth();
  } else {
    month = dateParse.getMonth();
  }

  console.log(month);

  if (month == "11" || month == "01" || month == "0") {
    return "winter";
  } else if (month == "02" || month == "03" || month == "04") {
    return "spring";
  } else if (month == "07" || month == "06" || month == "05") {
    return "summer";
  } else if (month == "08" || month == "09" || month == "10") {
    return "autumn";
  }
}

console.log(getSeason(() => new Date()));

module.exports = {
  getSeason,
};
