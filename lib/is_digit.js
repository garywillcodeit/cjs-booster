const { digits } = require("../utils/characters");

/**
 * Check if a string contains only digits".
 * @param {String} string - The string to check.
 * @returns {Boolean} - True or false.
 * @throws {Error} - The parameter is not a string.
 * */

const isDigits = (string) => {
  try {
    if (!string) throw new Error('"isDigits"\'s takes a string as parameter.');

    if (typeof string !== "string")
      throw new Error('"isDigits"\'s parameter must be a string.');

    if (string.trim().length === 0)
      throw new Error('"isDigits"\'s takes a as parameter.');

    string = string.trim().split("");

    const allDigits = digits.split("");

    let onlyDigits = true;

    string.forEach((e) => {
      if (!allDigits.includes(e)) {
        onlyDigits = false;
      }
    });

    return onlyDigits;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { isDigits };
