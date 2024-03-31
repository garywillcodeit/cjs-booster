/**
 * Check if a value is null".
 * @param {*} value - The value to check.
 * @returns {Boolean} - True or false.
 * */

const isNull = (value) => {
  if (!value) {
    return true;
  } else if ([null, undefined, 0, "", false].includes(value)) {
    return true;
  } else if (typeof value === "string" && value.trim().length === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = { isNull };
