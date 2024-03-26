const { typeOf } = require("./type_of");

const range = (integer) => {
  try {
    if (typeOf(integer) !== "integer")
      throw new Error('"range"\'s argument must be a integer.');

    let array = [];

    for (let i = 0; i < integer; i++) {
      array.push(i);
    }

    return array;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { range };
