const { isNull } = require("./is_null");
const { typeOf } = require("./type_of");

const mapFor = (array, prop) => {
  try {
    if (!Array.isArray(array)) {
      throw new Error('"mapFor" takes an array as attribute.');
    }

    if (isNull(prop) || typeOf(prop) !== "string") {
      throw new Error(
        `You must define a string property in mapFor's second attribute.`
      );
    }

    prop = prop.split(" ");

    array.forEach((e, i) => {
      if (typeOf(e) !== "object") {
        throw new Error('The method "mapFor" can be used only on objects\'.');
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
