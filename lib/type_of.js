const { isObject } = require("./is_object");

const typeOf = (data) => {
  try {
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
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { typeOf };
