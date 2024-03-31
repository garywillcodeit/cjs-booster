/**
 * Check if a value is an object".
 * @param {Object} object - The value to check.
 * @returns {Boolean} - True or false.
 * */

const isObject = (object) => {
  if (!object || [undefined, null, ""].includes(object)) {
    return false;
  } else if (typeof object !== "object") {
    return false;
  } else {
    if (Array.isArray(object)) {
      return false;
    } else {
      return true;
    }
  }
};

module.exports = { isObject };
