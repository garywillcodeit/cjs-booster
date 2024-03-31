const { isNull } = require("./is_null");
const { typeOf } = require("./type_of");

/**
 * Reduce an array of values or objects with  the value or a specified property.
 * @param {Array<*>} array - The array of objects to map.
 * @param {Number} init - The initial value.
 * @param {string} prop - The property to reduce.
 * @returns {Number} - The The reduced value of the array's values or object's properties.
 * @throws {Error} - If array is not an array, prop is not a string, or any object in the array does not contain the specified properties.
 */

const reduceFor = (array, init, prop) => {
  let type;
  let propType;

  try {
    if (!Array.isArray(array)) {
      throw new Error('"reduceFor" takes an array as first parameter.');
    }

    if (init && typeof init !== "number") {
      throw new Error(
        `The initial value (second parameter) must be a number (${typeof init} found).`
      );
    }

    array.forEach((e, i) => {
      if (i === 0 && typeof e === "number") {
        type = typeof e;
      } else if (i === 0) {
        type = typeOf(e);
      } else if (type !== typeOf(e) && type !== typeof e) {
        throw new Error(
          `Can't reduce because of different types of element (found ${type} and ${typeOf(
            e
          )}.`
        );
      }
    });

    if (!["number", "object"].includes(type)) {
      throw new Error(
        `"reduceFor"'s first parameter must be an array of numbers or an array of objects.`
      );
    }

    if (type === "object") {
      if (isNull(prop) || typeOf(prop) !== "string") {
        throw new Error(
          `This is an objects' array. You must define a property in reduceFor's third parameter.`
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
            `The value of ${prop} properties must be numbers (${typeof e[
              prop
            ]} found).`
          );
        }
      });

      init = init || 0;
      return array.reduce((acc, val) => acc + val[prop], init);
    } else {
      if (init && type !== typeOf(init)) {
        throw new Error(
          `The initial value type can't be different than the array's values type.`
        );
      }

      init = init || 0;
      return array.reduce((acc, val) => acc + val, init);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { reduceFor };
