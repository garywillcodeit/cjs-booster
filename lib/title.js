const { capitalize } = require("./capitalize");

const title = (string) => {
  try {
    if (!string) throw new Error('"capitalize"\'s takes a string argument.');

    if (typeof string !== "string")
      throw new Error('"capitalize"\'s argument must be a string.');

    if (string.trim().length === 0)
      throw new Error('"capitalize"\'s takes a string argument.');

    string = string.trim().split(" ");

    string = string.map((str) => {
      return capitalize(str);
    });

    string = string.join(" ");

    return string;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { title };
