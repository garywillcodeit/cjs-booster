const { lowerCaseLetters } = require("../utils/characters");
const { randomInd } = require("./random_ind");

const uid = () => {
  try {
    const date = Date.now().toString().split("");
    const characters = lowerCaseLetters.split("");
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
