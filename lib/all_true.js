/**
 * Check if all values from an array return true.
 * @param {Array} array - The array to check.
 * @returns {Boolean} - true or false.
 * @throws {Error} - The parameter is not an array.
 * */

const allTrue = (array) => {
  try {
    if (!Array.isArray(array)) {
      throw new Error('"all" must have an array as parameter.');
    }

    let isTrue = true;
    array.forEach((e) => {
      if (!e) {
        isTrue = false;
      }
    });

    return isTrue;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { allTrue };
