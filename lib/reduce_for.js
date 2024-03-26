const { isNull } = require("./is_null");
const { typeOf } = require("./type_of");

const reduceFor = (array, prop, init) => {
  let type;
  let propType;

  try {
    if (!Array.isArray(array)) {
      throw new Error('"reduceFor" takes an array as attribute.');
    }

    array.forEach((e, i) => {
      if (i === 0) type = typeOf(e);
      else if (type !== typeOf(e)) {
        throw new Error(
          `Can't reduce because of different types of element (found ${type} and ${typeOf(
            e
          )}.`
        );
      }
    });

    if (!["number", "float", "object"].includes(type)) {
      throw new Error(`Can't reduce an array that contains ${type} value.`);
    }

    if (type === "object") {
      if (isNull(prop) || typeOf(prop) !== "string") {
        throw new Error(
          `This is an objects' array. You must define a property in reduceFor's second attribute.`
        );
      }

      array.forEach((e, i) => {
        if (!e.hasOwnProperty(prop)) {
          throw new Error(
            `The property "${prop}" does not exist in every objects of the array.`
          );
        }
        if (i === 0) {
          propType = typeOf(e[prop]);
        } else if (propType !== typeOf(e[prop])) {
          throw new Error(
            `All ${prop}'s value must be the same type (${propType} and ${typeOf(
              e[prop]
            )} found.)`
          );
        }
      });

      if (!["number", "float", "object"].includes(propType)) {
        throw new Error(
          `Can't reduce an objects' array if the targeted props contain ${propType} value.`
        );
      }

      if (init && propType !== typeOf(init)) {
        throw new Error(
          `The initial value type can't be different than the prop's values type.`
        );
      }

      init = init || array[0][prop];
      return array.reduce((acc, val) => acc + val[prop], init);
    } else {
      if (init && type !== typeOf(init)) {
        throw new Error(
          `The initial value type can't be different than the array's values type.`
        );
      }

      init = init || array[0];
      return array.reduce((acc, val) => acc + val, init);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { reduceFor };
