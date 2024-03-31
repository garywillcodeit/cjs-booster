/**
 * Transform an array into an object. The array's indexes will be the properties and the array's values will be the object's values.
 * @param {Array} array - The array to transform.
 * @returns {Object} - An object containing the array's values.
 * @throws {Error} - The parameter is not an array.
 * */

const toObject = (array) => {
  try {
    if (!Array.isArray(array)) {
      throw new Error("toObject's parameter must be an array.");
    }

    let object = {};

    array.forEach((e, i) => (object[i] = e));

    return object;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { toObject };
