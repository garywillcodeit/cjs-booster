const { isNull } = require("./is_null");
const { typeOf } = require("./type_of");

const minValue = (array, prop) => {
  let type;

  try {
    if (!Array.isArray(array)) {
      throw new Error('"maxValue" takes an array as attribute.');
    }

    array.forEach((e, i) => {
      if (i === 0) type = typeOf(e);
      else if (type !== typeOf(e)) {
        throw new Error(
          `Can't get value because of different types of element (found ${type} and ${typeOf(
            e
          )}.`
        );
      }
    });

    if (!["integer", "float", "object"].includes(type)) {
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

      return array.sort((a, b) => a[prop] - b[prop]).shift();
    } else {
      return array.sort((a, b) => a - b).shift();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { minValue };
