/**
 * Capitalize the first word from a string".
 * @param {String} string - The string to capitalize.
 * @returns {String} - A new string with the first word capitalized.
 * @throws {Error} - The parameter is not a string.
 * */

const capitalize = (string) => {
  try {
    if (!string)
      throw new Error('"capitalize"\'s takes a string as parameter.');

    if (typeof string !== "string")
      throw new Error('"capitalize"\'s parameter must be a string.');

    if (string.trim().length === 0)
      throw new Error('"capitalize"\'s takes a string as parameter.');

    string = string.trim().split("");

    let newString = "";

    for (let i = 0; i < string.length; i++) {
      let letter = string[i];
      if (i === 0) newString += letter.toUpperCase();
      else newString += letter.toLowerCase();
    }

    return newString;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { capitalize };
