const { isObject } = require("./is_object");

/**
 * Get the precise type (string, integer, float, object, array, boolean) of the data in the parameter.
 * @param {String} string - The data to analyse.
 * @returns {String} - The precise type of the data.
 * */

const typeOf = (data) => {
  if (Array.isArray(data)) {
    return "array";
  } else if (isObject(data)) {
    return "object";
  } else if (typeof data === "number" && !Number.isInteger(data)) {
    return "float";
  } else if (typeof data === "number" && Number.isInteger(data)) {
    return "integer";
  } else if (["string", "boolean"].includes(typeof data)) {
    return typeof data;
  } else {
    return "Undefined data type.";
  }
};

module.exports = { typeOf };
