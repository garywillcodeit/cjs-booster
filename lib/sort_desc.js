const { isNull } = require("./is_null");
const { typeOf } = require("./type_of");

/**
 * Sort in descending order an array's values.
 * @param {Array<*>} array - The array to sort.
 * @param {String} prop - In case of an array of objects: the property to sort.
 * @returns {Array} - A new array with sorted values.
 * @throws {Error} - If: - the first parameter is not an array;  - the second parameter is not a string; - There is not a second parameter while the first parameter is an array of objects.
 * */

const sortDesc = function (array, prop) {
  try {
    let type;

    array.forEach((e, i) => {
      if (i === 0) type = typeOf(e);
      else if (type !== typeOf(e)) {
        throw new Error(
          `Can't sort because of different types of element (found ${type} and ${typeOf(
            e
          )}).`
        );
      }
    });

    switch (type) {
      case "object":
        if (isNull(prop) || typeOf(prop) !== "string") {
          throw new Error(
            `This is an objects' array. You must define a property in sortDesc's second parameter.`
          );
        }

        array.forEach((e, i) => {
          if (!e.hasOwnProperty(prop)) {
            throw new Error(
              `The property "${prop}" does not exist in every objects of the array.`
            );
          }
        });

        return array.sort((a, b) => b[prop].localeCompare(a[prop]));
      case "string":
        return array.sort((a, b) => b.localeCompare(a));
      case "integer":
        return array.sort((a, b) => b - a);
      case "float":
        return array.sort((a, b) => b - a);
      default:
        throw new Error(`Can't sort an array that contains ${type} value.`);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { sortDesc };
