const { digits } = require("../utils/characters");

const isDigits = (string) => {
  try {
    if (!string) throw new Error('"isDigits"\'s takes a string as argument.');

    if (typeof string !== "string")
      throw new Error('"isDigits"\'s argument must be a string.');

    if (string.trim().length === 0)
      throw new Error('"isDigits"\'s takes a as argument.');

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
