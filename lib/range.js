const { typeOf } = require("./type_of");

/**
 * Create an array with the number of indexes in parameter.
 * @param {Integer} integer - The number of index to create.
 * @returns {Array<Number>} - The array containing the indexes.
 * @throws {Error} - If the parameter is not a number.
 */

const range = (integer) => {
  try {
    if (typeOf(integer) !== "integer")
      throw new Error('"range"\'s parameter must be a integer.');

    let array = [];

    for (let i = 0; i < integer; i++) {
      array.push(i);
    }

    return array;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { range };
