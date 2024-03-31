/**
 * Check if at least one value from an array returns true.
 * @param {Array} array - The array to check.
 * @returns {Boolean} - true or false.
 * @throws {Error} - The parameter is not an array.
 * */

const anyTrue = (array) => {
  try {
    if (!Array.isArray(array)) {
      throw new Error('"any" must have an array as parameter.');
    }

    let isTrue = false;
    array.forEach((e) => {
      if (e) {
        isTrue = true;
      }
    });

    return isTrue;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { anyTrue };
