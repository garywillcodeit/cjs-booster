const { isNull } = require("./is_null");
const { typeOf } = require("./type_of");

/**
 * Get the higher value from an array.
 * @param {Array<Object>} array - The array to check.
 * @param {string} prop - The value or property to get.
 * @returns {Array<*>} - The found value or object with the higher value or higher property's value.
 * @throws {Error} - If array is not an array, prop is not a string, or any object in the array does not contain the specified properties.
 */

const maxValue = (array, prop) => {
  let type;

  try {
    if (!Array.isArray(array)) {
      throw new Error('"maxValue" takes an array as attribute.');
    }

    array.forEach((e, i) => {
      if (i === 0 && typeof e === "number") {
        type = "number";
      } else if (i === 0) {
        type = typeOf(e);
      } else if (type !== typeOf(e) && type !== typeof e) {
        throw new Error(
          `"maxValue"'s parameter must be an array of numbers or an array of objects.`
        );
      }
    });

    if (!["number", "object"].includes(type)) {
      throw new Error(`Can't sort an array that contains ${type} value.`);
    }

    if (type === "object") {
      if (isNull(prop) || typeOf(prop) !== "string") {
        throw new Error(
          `This is an objects' array. You must define a property in maxValue's second attribute.`
        );
      }

      array.forEach((e, i) => {
        if (!e.hasOwnProperty(prop)) {
          throw new Error(
            `The property "${prop}" does not exist in every objects of the array.`
          );
        }
        if (typeof e[prop] !== "number") {
          throw new Error(
            `The property "${prop}" must contain a number (${typeof e[
              prop
            ]} found).`
          );
        }
      });

      return array.sort((a, b) => b[prop] - a[prop]).shift();
    } else {
      return array.sort((a, b) => b - a).shift();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { maxValue };
