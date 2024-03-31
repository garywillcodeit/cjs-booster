const { isObject } = require("./is_object");

/**
 * Transform an object into an array. The array's values will be the object's values.
 * @param {Object} object - The object to transform.
 * @returns {Array} - An array containing the object's values.
 * @throws {Error} - The parameter is not an object.
 * */

const toArray = (object) => {
  try {
    if (!isObject(object)) {
      throw new Error('"toArray"\'s parameter must be an object.');
    }

    return Object.keys(object).map((e) => object[e]);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { toArray };
