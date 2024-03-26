const { isObject } = require("./is_object");

const toArray = (object) => {
  try {
    if (!isObject(object)) {
      throw new Error('"toArray"\'s argument must be an object.');
    }

    return Object.keys(object).map((e) => object[e]);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { toArray };
