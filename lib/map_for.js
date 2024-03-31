const { isNull } = require("./is_null");
const { typeOf } = require("./type_of");

/**
 * Maps an array of objects to an array of values or objects with specified properties.
 * @param {Array<Object>} array - The array of objects to map.
 * @param {string} prop - The property or properties to map.
 * @returns {Array<*>} - The mapped array of values or objects.
 * @throws {Error} - If array is not an array, prop is not a string, or any object in the array does not contain the specified properties.
 */

const mapFor = (array, prop) => {
  try {
    if (!Array.isArray(array)) {
      throw new Error('"mapFor" takes an array as first parameter.');
    }

    if (isNull(prop) || typeOf(prop) !== "string") {
      throw new Error(
        `You must define a string property in mapFor's second parameter.`
      );
    }

    prop = prop.split(" ");

    array.forEach((e, i) => {
      if (typeOf(e) !== "object") {
        throw new Error(
          'The method "mapFor" can be used only with objects\' array.'
        );
      }

      for (let p of prop) {
        if (!e.hasOwnProperty(p)) {
          throw new Error(
            `The property "${p}" does not exist in every objects of the array.`
          );
        }
      }
    });

    return array.map((e) => {
      let object = {};
      if (prop.length === 1) {
        return e[prop[0]];
      } else {
        for (let p of prop) {
          object[p] = e[p];
        }
        return object;
      }
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { mapFor };
