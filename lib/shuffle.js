const { randomInd } = require("./random_ind");

const shuffle = (array) => {
  try {
    if (!Array.isArray(array))
      throw new Error("shuffle's argument must be an array.");

    let newArray = [];

    const { length } = array;

    for (let i = 0; i < length; i++) {
      let randomIndex = randomInd(array);
      newArray.push(array[randomIndex]);
      array.splice(randomIndex, 1);
    }

    return newArray;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { shuffle };
