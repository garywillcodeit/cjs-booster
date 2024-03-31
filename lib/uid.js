const { unaccentuedCases } = require("../utils/characters");
const { randomInd } = require("./random_ind");

/**
 * Get a unqiue id created by using the timestamp and unaccentued characters.
 * @returns {String} - The unique id.
 * */

const uid = () => {
  try {
    const date = Date.now().toString().split("");
    const characters = unaccentuedCases.split("");
    let id = "";

    for (let i = 0; i < date.length; i++) {
      const number = date[i];
      const index = randomInd(characters);
      const char = characters[index];
      id += char + number;
    }

    return id;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { uid };
